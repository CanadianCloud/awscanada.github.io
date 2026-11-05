import LogoArtwork from '../LogoArtwork';
import type { ArtworkCrop } from '../LogoArtwork';
// Import sponsor logos
import docker from '../../assets/past_sponsors_logos/Docker-Logo-2013-2015.png';
import datadog from '../../assets/past_sponsors_logos/Datadog_logo.svg.png';
import hp from '../../assets/past_sponsors_logos/HP-Logo.png';
import hootsuite from '../../assets/past_sponsors_logos/Hootsuite-Logo.png';
import vmware from '../../assets/past_sponsors_logos/VMware-Logo.png';
import sophos from '../../assets/past_sponsors_logos/Sophos_logo.png';
import netapp from '../../assets/past_sponsors_logos/NetApp-Emblem.png';
import suse from '../../assets/past_sponsors_logos/suse_logo.png';
import elastic from '../../assets/past_sponsors_logos/elastic.png';
import trendMicro from '../../assets/past_sponsors_logos/trend-micro-logo.png';
import ronin from '../../assets/past_sponsors_logos/ronin.png';
import paloAlto from '../../assets/past_sponsors_logos/PaloAltoNetworks_2020_Logo.svg.png';
import sumoLogic from '../../assets/past_sponsors_logos/sumologic.png';
import commvault from '../../assets/past_sponsors_logos/commvault.png';
import fortinet from '../../assets/past_sponsors_logos/fortinet.png';
import robson from '../../assets/past_sponsors_logos/16_robson_logo.png';
import veeam from '../../assets/past_sponsors_logos/Veeam-Logo.jpg';
import hashicorp from '../../assets/past_sponsors_logos/hashicorp.png';
import couchbase from '../../assets/past_sponsors_logos/couchbase5916.png';

export default function Sponsors() {
  // Row 1 - 6 sponsors
  const row1 = [
    { name: 'Docker', logo: docker },
    { name: 'Datadog', logo: datadog },
    { name: 'HP', logo: hp },
    { name: 'Hootsuite', logo: hootsuite, className: 'h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-24 w-full object-contain' },
    { name: 'VMware', logo: vmware },
    { name: 'Sophos', logo: sophos, className: 'h-auto max-h-4 sm:max-h-5 md:max-h-6 lg:max-h-6 w-full object-contain' },
  ];

  // Row 2 - 7 sponsors (larger row)
  const row2 = [
    { name: 'NetApp', logo: netapp },
    { name: 'SUSE', logo: suse },
    { name: 'Elastic', logo: elastic },
    { name: 'Trend Micro', logo: trendMicro, className: 'h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-24 w-full object-contain' },
    { name: 'Ronin', logo: ronin },
    { name: 'Palo Alto', logo: paloAlto },
    { name: 'Sumo Logic', logo: sumoLogic },
  ];

  // Row 3 - 6 sponsors
  const row3 = [
    { name: 'Commvault', logo: commvault },
    { name: 'Fortinet', logo: fortinet },
    { name: 'Robson Inc', logo: robson, className: 'h-auto max-h-6 sm:max-h-7 md:max-h-8 lg:max-h-8 w-full object-contain' },
    { name: 'Veeam', logo: veeam },
    { name: 'HashiCorp', logo: hashicorp },
    { name: 'Couchbase', logo: couchbase, className: 'h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-24 w-full object-contain' },
  ];

  const allSponsors = [...row1, ...row2, ...row3];

  const crops: Record<string, ArtworkCrop> = {
    'Hootsuite': { x: 30, y: 712, width: 3779, height: 736, sourceWidth: 3840, sourceHeight: 2160 },
    'VMware': { x: 10, y: 779, width: 3819, height: 589, sourceWidth: 3840, sourceHeight: 2160 },
    'Trend Micro': { x: 0, y: 195, width: 600, height: 210, sourceWidth: 600, sourceHeight: 600 },
    'Sumo Logic': { x: 0, y: 0, width: 864, height: 1168, sourceWidth: 864, sourceHeight: 1168 },
    'Veeam': { x: 66, y: 515, width: 3708, height: 1129, sourceWidth: 3840, sourceHeight: 2160 },
  };

  return <section id="sponsors" className="sponsors-section shell section-space"><div className="section-heading"><div><p className="eyebrow">A little support goes a long way</p><h2 className="display-heading">Thanks for making it happen.</h2></div><p>To all our past sponsors: thank you for helping us bring people together.</p></div><div className="sponsor-grid">{allSponsors.map(sponsor => <div className={`sponsor-logo${crops[sponsor.name] ? ' sponsor-logo--featured' : ''}${sponsor.name === 'Sumo Logic' ? ' sponsor-logo--sumo' : ''}`} key={sponsor.name}><LogoArtwork src={sponsor.logo} alt={sponsor.name} crop={crops[sponsor.name]} /></div>)}</div></section>;
}
