import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, Clock3, MapPin, Menu, X } from 'lucide-react'
import eventsData from '../../events.json'
import Logo from './Logo'
import FAQ from './sections/FAQ'
import Gallery from './sections/Gallery'
import Partners from './sections/Partners'
import Sponsors from './sections/Sponsors'
import speakerPhoto from '../assets/gallery/AWSDay24-119.jpg'
import communityPhoto from '../assets/gallery/AWSDay24-050.jpg'
import crowdPhoto from '../assets/gallery/AWSDay24-092.jpg'
import stagePhoto from '../assets/gallery/AWSDay24-110.jpg'
import cityPhoto from '../assets/vancouver-skyline-mountains.jpg'
import meetupPhoto from '../assets/gallery/1-65f8993a.jpeg'

const COMMUNITY_CHAT = 'https://chat.whatsapp.com/D74a4GrpOwiBlFJei8Hk12'
const links = [['Events', '#events'], ['Our Community', '#community'], ['Community Day', '#community-day'], ['Get Involved', '#get-involved']]
const waysToHelp = [
  { title: 'Speak', label: 'Share Your Voice', number: '01', text: 'We’re looking for passionate speakers to inspire our AWS community.', href: 'https://tally.so/r/wv79vQ', action: 'Share your idea' },
  { title: 'Volunteer', label: 'Join Our Volunteers', number: '02', text: 'Connect with the local community by lending a hand at our next event.', href: 'https://tally.so/r/w7BkgA', action: 'Lend a hand' },
  { title: 'Sponsor', label: 'Partner With Us', number: '03', text: 'Your support goes directly toward food and drinks for 100 AWS innovators.', href: 'https://tally.so/r/mBORVN', action: 'Partner with us' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const navigation = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    const clickAway = (event: PointerEvent) => { if (!navigation.current?.contains(event.target as Node) && !toggle.current?.contains(event.target as Node)) setOpen(false) }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', clickAway)
    navigation.current?.querySelector('a')?.focus()
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', clickAway) }
  }, [open])
  return <header className="site-header shell">
    <a href="#top" className="brand-link" aria-label="AWS User Group Vancouver home"><Logo /></a>
    <nav ref={navigation} id="main-navigation" aria-label="Main navigation" className={`main-nav${open ? ' is-open' : ''}`}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a href={COMMUNITY_CHAT} className="button button-orange nav-join" target="_blank" rel="noopener noreferrer">Join the Community Chat <ArrowRight size={18} /></a>
    </nav>
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>
}

function Hero() {
  return <>
    <section id="about" className="hero shell" aria-labelledby="hero-title">
      <p className="eyebrow hero-eyebrow">Vancouver’s AWS community <span /></p>
      <h1 id="hero-title"><span>Cloud is better </span><span>together.</span></h1>
      <div className="hero-copy"><p>Local meetups. Shared knowledge.<br />Real connections. Community-led<br className="desktop-break" /> since 2014.</p><div className="hero-actions"><a href="#events" className="button button-ink">Explore events <ArrowRight size={20} /></a><a href={COMMUNITY_CHAT} target="_blank" rel="noopener noreferrer" className="button button-orange">Join the Community Chat <ArrowRight size={20} /></a></div></div>
      <div className="hero-art"><div className="hero-orange" aria-hidden="true" /><figure className="hero-photo hero-speaker"><img src={speakerPhoto} alt="A community speaker sharing ideas at AWS Community Day" fetchPriority="high" /></figure><figure className="hero-photo hero-people"><img src={communityPhoto} alt="Community members connecting at AWS Community Day" fetchPriority="high" /></figure><figure className="hero-photo hero-city"><img src={cityPhoto} alt="Vancouver’s downtown skyline, False Creek waterfront and North Shore mountains" /></figure></div>
    </section>
    <div className="values-strip" aria-label="Meet, learn, share, build"><div>Meet <span>·</span> Learn <span>·</span> Share <span>·</span> Build</div></div>
  </>
}

function Events() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 60_000); return () => window.clearInterval(timer) }, [])
  const events = eventsData.filter(event => new Date(event.endAt || event.startAt).getTime() > now).sort((a, b) => Date.parse(a.startAt) - Date.parse(b.startAt))
  return <section id="events" className="events-section shell section-space" aria-labelledby="events-title">
    <div className="events-intro"><p className="eyebrow section-index">01 / Upcoming events</p><h2 id="events-title" className="display-heading">Make room <br />in your <br />calendar.</h2><span className="short-rule" /><p>Check out the upcoming events and get involved. Your participation makes a difference!</p><a href="https://luma.com/awsvan" target="_blank" rel="noopener noreferrer" className="text-link">View our calendar <ArrowRight size={18} /></a></div>
    <div className="event-list">{events.length ? events.map((event, index) => {
      const date = new Date(event.startAt)
      const month = date.toLocaleDateString('en-CA', { month: 'short', timeZone: 'America/Vancouver' })
      const day = date.toLocaleDateString('en-CA', { day: '2-digit', timeZone: 'America/Vancouver' })
      const year = date.toLocaleDateString('en-CA', { year: 'numeric', timeZone: 'America/Vancouver' })
      return <article className="event-row" key={event.id}><time className="event-date" dateTime={event.startAt}><span>{month}</span><strong>{day}</strong><small>{year}</small></time><div className="event-details"><h3><a href={event.url} target="_blank" rel="noopener noreferrer">{event.title}</a></h3><p><Clock3 size={17} aria-hidden="true" /> {event.time}</p><p><MapPin size={17} aria-hidden="true" /> {event.city || event.location}</p><p className="event-address">{event.address}</p></div><div className="event-visual"><img src={event.image} alt="" loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = index % 2 ? communityPhoto : crowdPhoto }} /><a className="button button-orange" href={event.url} target="_blank" rel="noopener noreferrer" aria-label={`Register for ${event.title}`}>Save your spot <ArrowRight size={20} /></a></div></article>
    }) : <div className="events-empty"><h3>Good things are on the way.</h3><p>We’re planning our next gathering. Find upcoming announcements in our calendar or meet the community in our WhatsApp chat.</p><a href={COMMUNITY_CHAT} target="_blank" rel="noopener noreferrer" className="button button-orange">Join the Community Chat <ArrowRight size={20} /></a></div>}</div>
  </section>
}

function GetInvolved() {
  return <section id="get-involved" className="involved-section shell section-space" aria-labelledby="involved-title"><div className="involved-heading"><h2 id="involved-title" className="display-heading">The stage is yours.</h2><div><p className="eyebrow">Get involved</p><p>There are many ways to contribute, whether you want to share your knowledge, help run events, or support what we do.</p></div></div><div className="involved-grid"><div className="involved-photo"><img src={crowdPhoto} alt="The Vancouver cloud community gathering at an event" loading="lazy" /><span>Made possible<br />by people like you.</span></div>{waysToHelp.map(item => <a key={item.title} className="involved-link" href={item.href} target="_blank" rel="noopener noreferrer"><span className="eyebrow">{item.number} / Get involved</span><h3>{item.title}</h3><h4 className="involved-original-title">{item.label}</h4><p>{item.text}</p><span className="involved-action">{item.action} <ArrowRight size={25} aria-hidden="true" /></span></a>)}</div></section>
}

function Community() {
  return <section id="community" className="community-section shell section-space" aria-labelledby="community-title"><div className="community-heading"><div><p className="eyebrow">02 / Our community</p><h2 id="community-title" className="display-heading">Different people.<br />Shared curiosity.</h2></div><div className="community-description"><p><strong>Connecting people. Empowering ideas.</strong></p><p>We run regular meetups in downtown Vancouver and the annual Vancouver AWS Community Day. We also co-host Cloud Summit, Canada’s largest Cloud and AI conference, in Vancouver and Toronto.</p><p>From your first cloud project to your next big idea, you belong here. We’re a volunteer-run, not-for-profit community bringing people together to learn, share and build lasting connections.</p></div></div><Gallery /></section>
}

function CommunityDay() {
  const photos = [
    { src: communityPhoto, alt: 'Community members connecting at AWS Community Day' },
    { src: crowdPhoto, alt: 'Networking at AWS Community Day Vancouver' },
    { src: stagePhoto, alt: 'An auditorium full of builders at AWS Community Day' },
    { src: meetupPhoto, alt: 'A presentation at a past Vancouver AWS meetup' },
  ]
  return <section id="community-day" className="community-day section-space" aria-labelledby="community-day-title">
    <div className="shell community-day-grid">
      <div className="community-day-copy">
        <p className="eyebrow">03 / AWS Community Day</p>
        <h2 id="community-day-title" className="display-heading">One community.<br />A whole day<br />of possibility.</h2>
        <p>AWS Community Day is an annual, community-led event that brings together cloud enthusiasts, builders, and professionals from across Canada to share knowledge, connect, and inspire innovation.</p>
        <p>Learn about the event’s history and stay connected with the community.</p>
        <a href="https://www.awsday.ca/" target="_blank" rel="noopener noreferrer" className="button button-cream">Learn more about AWS Community Day <ArrowRight size={20} /></a>
        <a href="https://cloudsummit.ca/" target="_blank" rel="noopener noreferrer" className="community-day-secondary">Discover Cloud Summit in Vancouver and Toronto <ArrowRight size={18} /></a>
      </div>
      <div className="community-day-gallery">{photos.map(photo => <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />)}</div>
    </div>
  </section>
}

function GlobalCommunity() {
  return <section id="global-site" className="global-section shell section-space" aria-labelledby="global-title">
    <p className="eyebrow">Local connections. Global community.</p>
    <div className="global-grid"><div><h2 id="global-title" className="display-heading">Looking to connect with AWS user groups around the world?</h2><p>Visit the Global AWS Community site for tips, resources, and AWS user groups worldwide.</p></div><a href="https://awsusergroups.com/" target="_blank" rel="noopener noreferrer" className="button button-ink">Go to Global Site <ArrowRight size={22} /></a></div>
    <p className="community-principles">Lead globally · Connect communities · Grow together · Cloud innovation · Share knowledge</p>
  </section>
}

function Footer() {
  const socials = [['Luma', 'https://luma.com/awsvan'], ['LinkedIn', 'https://linkedin.com/company/canadiancloud'], ['Instagram', 'https://www.instagram.com/canadiancloudninja/'], ['Meetup', 'https://www.meetup.com/vanawsug/'], ['YouTube', 'https://www.youtube.com/channel/UCMfuz22CouuimIXngTMMZIQ'], ['AWS Day', 'https://www.awsday.ca/'], ['Cloud Summit', 'https://cloudsummit.ca/']]
  return <footer className="site-footer"><div className="shell"><div className="footer-top"><div><p className="eyebrow">Keep the conversation going</p><h2 className="display-heading">See you at<br />the next one.</h2></div><a href={COMMUNITY_CHAT} target="_blank" rel="noopener noreferrer" className="button button-orange">Join the Community Chat <ArrowRight size={24} /></a></div><div className="footer-bottom"><a href="#top" aria-label="AWS User Group Vancouver home"><Logo inverse /></a><div className="footer-socials">{socials.map(([label, href]) => <a href={href} key={label} target="_blank" rel="noopener noreferrer">{label} <ArrowRight size={14} /></a>)}</div><div className="footer-small"><p>Community-led since 2014.<br />Volunteer-run. Vancouver, BC.</p><a href="#faq">Questions? Start here <ArrowDown size={14} /></a><p className="eyebrow">Helpful links</p><a href="https://tally.so/r/w7BkgA" target="_blank" rel="noopener noreferrer">Be a volunteer <ArrowRight size={14} /></a><a href="https://tally.so/r/wv79vQ" target="_blank" rel="noopener noreferrer">Call for speakers <ArrowRight size={14} /></a><a href="https://tally.so/r/mBORVN" target="_blank" rel="noopener noreferrer">Become a sponsor <ArrowRight size={14} /></a><a href="#faq-about">Code of Conduct <ArrowRight size={14} /></a><a href="https://awsusergroups.com/" target="_blank" rel="noopener noreferrer">Find AWS communities worldwide <ArrowRight size={14} /></a></div></div><div className="footer-credit"><span>© {new Date().getFullYear()} AWS User Group Vancouver</span><span>Meet. Learn. Share. Build.</span><a href="#top">Back to top ↑</a></div></div></footer>
}

export default function EditorialHome() {
  return <div id="top" className="editorial-site"><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content"><Hero /><Events /><GetInvolved /><Community /><CommunityDay /><Partners /><Sponsors /><FAQ /><GlobalCommunity /></main><Footer /></div>
}
