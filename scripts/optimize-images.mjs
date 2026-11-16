// Generate display assets from untouched originals before dev/build.
import sharp from 'sharp'
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const assets = path.join(root, 'src/assets')
const output = path.join(assets, 'optimized')
await mkdir(output, { recursive: true })
const originals = (await readdir(path.join(assets, 'gallery')))
  .filter(name => /^AWSDay24-.*\.jpg$/.test(name)).sort().map(name => `gallery/${name}`)
originals.push('gallery/1-65f8993a.jpeg', 'vancouver-skyline-mountains.jpg')
const imports = [], entries = []
for (const [index, relative] of originals.entries()) {
  const source = path.join(assets, relative)
  const { width, height } = await sharp(source).metadata()
  const stem = path.parse(relative).name
  const variants = []
  for (const size of [...new Set([480, 960, 1600].map(w => Math.min(w, width)))]) {
    const name = `${stem}-${size}.webp`
    await sharp(source).rotate().resize({ width: size }).webp({ quality: 88, effort: 6 }).toFile(path.join(output, name))
    const variable = `photo${index}_${size}`
    imports.push(`import ${variable} from './${name}'`)
    variants.push([size, variable])
  }
  const srcSet = variants.map(([w, variable]) => '${' + variable + '} ' + w + 'w').join(', ')
  entries.push(`  ${JSON.stringify(stem)}: { src: ${variants.at(-1)[1]}, srcSet: \`${srcSet}\`, width: ${width}, height: ${height} }`)
}
await writeFile(path.join(output, 'photos.ts'), imports.join('\n') + '\n\nexport const photos = {\n' + entries.join(',\n') + '\n}\n')

async function componentFiles(dir) {
  const files = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await componentFiles(file))
    else if (entry.name.endsWith('.tsx')) files.push(file)
  }
  return files
}
const used = new Set()
for (const file of await componentFiles(path.join(root, 'src/components'))) {
  for (const match of (await readFile(file, 'utf8')).matchAll(/optimized\/([^']+\.webp)/g)) used.add(match[1])
}
// Retain canvas proportions so the existing SVG crops and logo sizes stay unchanged.
for (const folder of ['partner_logos', 'past_sponsors_logos', 'social_media']) {
  for (const name of await readdir(path.join(assets, folder))) {
    const target = `${folder}-${path.parse(name).name}.webp`
    if (!used.has(target)) continue
    await sharp(path.join(assets, folder, name))
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ lossless: true, effort: 6 }).toFile(path.join(output, target))
  }
}
console.log(`Generated responsive photos and ${used.size} optimized logos/icons.`)
