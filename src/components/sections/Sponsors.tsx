import LogoArtwork from '../LogoArtwork';
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

const sponsors = [
  { name: "Docker", logo: docker, shape: "compact", crop: {"x": 667, "y": 27, "width": 2503, "height": 2101, "sourceWidth": 3840, "sourceHeight": 2160} },
  { name: "Datadog", logo: datadog, shape: "compact", crop: {"x": 0, "y": 0, "width": 1200, "height": 1200, "sourceWidth": 1200, "sourceHeight": 1200} },
  { name: "HP", logo: hp, shape: "compact", crop: {"x": 866, "y": 26, "width": 2108, "height": 2108, "sourceWidth": 3840, "sourceHeight": 2160} },
  { name: "Hootsuite", logo: hootsuite, shape: "wide", crop: {"x": 31, "y": 713, "width": 3777, "height": 734, "sourceWidth": 3840, "sourceHeight": 2160} },
  { name: "VMware", logo: vmware, shape: "wide", crop: {"x": 11, "y": 780, "width": 3817, "height": 587, "sourceWidth": 3840, "sourceHeight": 2160} },
  { name: "Sophos", logo: sophos, shape: "wide", crop: {"x": 14, "y": 38, "width": 1198, "height": 203, "sourceWidth": 1221, "sourceHeight": 261} },
  { name: "NetApp", logo: netapp, shape: "compact", crop: {"x": 1011, "y": 34, "width": 1817, "height": 2092, "sourceWidth": 3840, "sourceHeight": 2160} },
  { name: "SUSE", logo: suse, shape: "medium", crop: {"x": 0, "y": 0, "width": 4136, "height": 1925, "sourceWidth": 4136, "sourceHeight": 1925} },
  { name: "Elastic", logo: elastic, shape: "medium", crop: {"x": 28, "y": 30, "width": 2372, "height": 764, "sourceWidth": 2400, "sourceHeight": 823} },
  { name: "Trend Micro", logo: trendMicro, shape: "medium", crop: {"x": 0, "y": 196, "width": 600, "height": 208, "sourceWidth": 600, "sourceHeight": 600} },
  { name: "Ronin", logo: ronin, shape: "wide", crop: {"x": 0, "y": 25, "width": 256, "height": 51, "sourceWidth": 256, "sourceHeight": 101} },
  { name: "Palo Alto", logo: paloAlto, shape: "wide", crop: {"x": 2, "y": 0, "width": 2555, "height": 469, "sourceWidth": 2560, "sourceHeight": 469} },
  { name: "Sumo Logic", logo: sumoLogic, shape: "compact", crop: {"x": 0, "y": 0, "width": 864, "height": 1168, "sourceWidth": 864, "sourceHeight": 1168} },
  { name: "Commvault", logo: commvault, shape: "wide", crop: {"x": 0, "y": 0, "width": 1552, "height": 300, "sourceWidth": 1552, "sourceHeight": 300} },
  { name: "Fortinet", logo: fortinet, shape: "wide", crop: {"x": 0, "y": 0, "width": 1520, "height": 176, "sourceWidth": 1520, "sourceHeight": 176} },
  { name: "Robson Inc", logo: robson, shape: "compact", crop: {"x": 4, "y": 0, "width": 34, "height": 42, "sourceWidth": 40, "sourceHeight": 42} },
  { name: "Veeam", logo: veeam, shape: "medium", crop: {"x": 67, "y": 516, "width": 3706, "height": 1127, "sourceWidth": 3840, "sourceHeight": 2160} },
  { name: "HashiCorp", logo: hashicorp, shape: "wide", crop: {"x": 81, "y": 80, "width": 1738, "height": 411, "sourceWidth": 1897, "sourceHeight": 571} },
  { name: "Couchbase", logo: couchbase, shape: "wide", crop: {"x": 28, "y": 12, "width": 747, "height": 176, "sourceWidth": 808, "sourceHeight": 203} },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section shell section-space">
      <div className="section-heading">
        <div><p className="eyebrow">A little support goes a long way</p><h2 className="display-heading">Thanks for making it happen.</h2></div>
        <p>To all our past sponsors: thank you for helping us bring people together.</p>
      </div>
      <div className="sponsor-grid">
        {sponsors.map(sponsor => (
          <div className={`sponsor-logo sponsor-logo--${sponsor.shape}`} key={sponsor.name}>
            <LogoArtwork src={sponsor.logo} alt={sponsor.name} crop={sponsor.crop} />
          </div>
        ))}
      </div>
    </section>
  );
}
