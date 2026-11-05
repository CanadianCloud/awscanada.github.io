import awsday from '../../assets/partner_logos/awsday.png';
import cloudSummitReverse from '../../assets/partner_logos/CloudSummitColour_Stacked.png';
import hackerRivalsWhite from '../../assets/partner_logos/Logo-Oct25-Black.png';
import cpca from '../../assets/partner_logos/CPCA_2025_LogoHorizontal_Short_Colour.png';

export default function Partners() {
  const partners = [
    { name: 'AWS Community Day', logo: awsday },
    { name: 'Cloud Summit', logo: cloudSummitReverse },
    { name: 'Hacker Rivals', logo: hackerRivalsWhite },
    { name: 'CPCA', logo: cpca },
  ];

  return <section id="partners" className="partners-section shell section-space"><div className="section-heading"><div><p className="eyebrow">Better, together</p><h2 className="display-heading">Our community partners.</h2></div><p>We’re proud to collaborate with organizations that help us grow and empower the AWS community.</p></div><div className="partner-grid">{partners.map(partner => <div className="partner-logo" key={partner.name}><img src={partner.logo} alt={partner.name} loading="lazy" /></div>)}</div></section>;
}
