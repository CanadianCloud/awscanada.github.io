export default function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand${inverse ? ' brand-inverse' : ''}`} aria-label="AWS User Group Vancouver">
      <span className="brand-name" aria-hidden="true">
        <span>AWS</span>
        <svg className="brand-leaf" viewBox="0 0 100 106" fill="currentColor"><path d="M50 0 61 24 71 18 68 43 86 34 82 49 99 55 75 76 79 88 55 84 55 106 46 106 46 84 22 88 26 76 1 55 18 49 14 34 32 43 29 18 39 24Z" /></svg>
        <span>UG</span>
      </span>
      <span className="brand-city" aria-hidden="true">VANCOUVER</span>
      <svg className="brand-rule" preserveAspectRatio="none" viewBox="0 0 240 17" fill="none" aria-hidden="true"><path d="M0 15H186L204 1L222 15H240" stroke="currentColor" strokeWidth="3" /></svg>
    </span>
  )
}
