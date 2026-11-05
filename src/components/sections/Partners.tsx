import LogoArtwork from '../LogoArtwork';
import type { ArtworkCrop } from '../LogoArtwork';
import awsday from '../../assets/partner_logos/awsday.png';
import cloudSummit from '../../assets/partner_logos/CloudSummitColour_Stacked.png';
import hackerRivals from '../../assets/partner_logos/Logo-Oct25-Black.png';
import cpca from '../../assets/partner_logos/CPCA_2025_LogoHorizontal_Short_Colour.png';

export default function Partners() {
  const partners = [
    { name: 'AWS Community Day', logo: awsday },
    { name: 'Cloud Summit', logo: cloudSummit },
    { name: 'Hacker Rivals', logo: hackerRivals },
    { name: 'CPCA', logo: cpca },
  ];

  const crops: Record<string, ArtworkCrop> = {
    'Cloud Summit': { x: 201, y: 122, width: 390, height: 368, sourceWidth: 792, sourceHeight: 612 },
    'CPCA': { x: 46, y: 202, width: 509, height: 196, sourceWidth: 600, sourceHeight: 600 },
  };

  return <section id="partners" className="partners-section shell section-space"><div className="section-heading"><div><p className="eyebrow">Better, together</p><h2 className="display-heading">Our community partners.</h2></div><p>We’re proud to collaborate with organizations that help us grow and empower the AWS community.</p></div><div className="partner-grid">{partners.map(partner => <div className={`partner-logo${partner.name === 'Cloud Summit' ? ' partner-logo--cloud-summit' : ''}${partner.name === 'CPCA' ? ' partner-logo--cpca' : ''}`} key={partner.name}><LogoArtwork src={partner.logo} alt={partner.name} crop={crops[partner.name]} /></div>)}</div></section>;
}
