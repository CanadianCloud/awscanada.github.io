import awsday from '../../assets/partner_logos/awsday.png';
import cloudSummitReverse from '../../assets/partner_logos/CloudSummitReverse_Horizontal.png';
import hackerRivalsWhite from '../../assets/partner_logos/Logo-Oct25-White.png';
import cpca from '../../assets/partner_logos/CPCA_2025_LogoHorizontal_Short_Colour.png';

export default function Partners() {
  const partners = [
    { name: 'AWS Community Day', logo: awsday },
    { name: 'Cloud Summit', logo: cloudSummitReverse },
    { name: 'Hacker Rivals', logo: hackerRivalsWhite },
    { name: 'CPCA', logo: cpca },
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header on its own line */}
        <h2 className="text-[40px] font-bold text-gray-900 mb-3">
          Partners
        </h2>
        
        {/* Body text and logos horizontally aligned */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 md:items-center">
          {/* Left side - Body text */}
          <div className="flex-shrink-0 md:w-[380px] w-full">
            <p className="text-[17px] font-inter text-[#1C1C1C] leading-relaxed whitespace-nowrap">
              We're proud to collaborate with organizations that help<br />
              us grow and empower the AWS community.
            </p>
          </div>

          {/* Right side - Logos horizontal */}
          <div className="flex-1 w-full flex flex-wrap md:flex-nowrap gap-3 justify-center md:justify-end md:mr-[-12px]">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow w-[188px] h-[100px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[140px] h-auto max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




