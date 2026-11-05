import LogoArtwork from '../LogoArtwork';
import type { ArtworkCrop } from '../LogoArtwork';
import awsday from '../../assets/partner_logos/awsday.png';
import cloudSummit from '../../assets/partner_logos/CloudSummitReversed_Stacked.png';
import hackerRivals from '../../assets/partner_logos/Logo-Oct25-White.png';
import cpca from '../../assets/partner_logos/CPCA_2025_LogoHorizontal_Short_Colour.png';

export default function Partners() {
  const partners = [
    { name: 'AWS Community Day', logo: awsday },
    { name: 'Cloud Summit', logo: cloudSummit },
    { name: 'Hacker Rivals', logo: hackerRivals },
    { name: 'CPCA', logo: cpca },
  ];

  const crops: Record<string, ArtworkCrop> = {
    "AWS Community Day": {
        "x": 0,
        "y": 0,
        "width": 225,
        "height": 225,
        "sourceWidth": 225,
        "sourceHeight": 225
    },
    "Cloud Summit": {
        "x": 200,
        "y": 121,
        "width": 392,
        "height": 370,
        "sourceWidth": 792,
        "sourceHeight": 612
    },
    "Hacker Rivals": {
        "x": 26,
        "y": 40,
        "width": 452,
        "height": 398,
        "sourceWidth": 500,
        "sourceHeight": 500
    },
    "CPCA": {
        "x": 45,
        "y": 201,
        "width": 510,
        "height": 198,
        "sourceWidth": 600,
        "sourceHeight": 600
    }
};

  return <section id="partners" className="partners-section shell section-space"><div className="section-heading"><div><p className="eyebrow">Better, together</p><h2 className="display-heading">Our community partners.</h2></div><p>We’re proud to collaborate with organizations that help us grow and empower the AWS community.</p></div><div className="partner-grid">{partners.map(partner => <div className="partner-logo" key={partner.name}><LogoArtwork src={partner.logo} alt={partner.name} crop={crops[partner.name]} /></div>)}</div></section>;
}
