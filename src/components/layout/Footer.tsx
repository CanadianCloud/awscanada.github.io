import awsugLogo from '../../assets/logo_aws_ug.png';
import discordIcon from '../../assets/social_media/discord.png';
import linkedinIcon from '../../assets/social_media/linkedin.png';
import meetupIcon from '../../assets/social_media/meetup.png';
import youtubeIcon from '../../assets/social_media/youtube.png';
import instagramIcon from '../../assets/social_media/instagram.png';
import cloudIcon from '../../assets/social_media/cloud.png';
import awsdayIcon from '../../assets/social_media/awsday.png';
import lumaIcon from '../../assets/social_media/luma.png';

export default function Footer() {
  const socialLinks = [
    { icon: lumaIcon, href: 'https://luma.com/awsvan', alt: 'Luma' },
    { icon: linkedinIcon, href: 'https://linkedin.com/company/canadiancloud', alt: 'LinkedIn' },
    { icon: instagramIcon, href: 'https://www.instagram.com/canadiancloudninja/', alt: 'Instagram' },
    { icon: discordIcon, href: 'https://discord.com/invite/wg372JtEK8', alt: 'Discord' },
    { icon: meetupIcon, href: 'https://www.meetup.com/vanawsug/', alt: 'Meetup' },
    { icon: youtubeIcon, href: 'https://www.youtube.com/channel/UCMfuz22CouuimIXngTMMZIQ', alt: 'YouTube' },
    { icon: awsdayIcon, href: 'https://www.awsday.ca/', alt: 'AWS Day' },
    { icon: cloudIcon, href: 'https://cloudsummit.ca/', alt: 'Cloud Summit' },
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto my-8 sm:my-12 md:my-20 px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 items-start">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center">
            <img 
              src={awsugLogo} 
              alt="AWS UG Logo" 
              className="h-15 sm:h-17 md:h-19 mb-4 sm:mb-5"
            />
            <div className="flex gap8 justify-center w-full mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={social.alt}
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div className="ml-28">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Helpful Links</h4>
            <ul className="space-y-0.5 text-white text-sm sm:text-[15px]">
              <li>
                <a href="https://tally.so/r/w7BkgA" target="_blank" rel="noopener noreferrer" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Be a Volunteer
                </a>
              </li>
              <li>
                <a href="https://tally.so/r/wv79vQ" target="_blank" rel="noopener noreferrer" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Call For Speakers
                </a>
              </li>
              <li>
                <a href="https://tally.so/r/mBORVN" target="_blank" rel="noopener noreferrer" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Become an Sponsor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aws-orange transition-colors inline-block py-1 active:text-aws-orange-dark">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Discord CTA */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Join Our Discord Channel!</h4>
            <p className="text-white mb-4 sm:mb-5 leading-relaxed text-sm sm:text-[15px]">
              Connect with fellow AWS enthusiasts, share ideas, learn from the community, and stay updated on upcoming events
            </p>
            <a
              href="https://discord.com/invite/wg372JtEK8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF9900] hover:bg-[#FF9900] text-black px-6 sm:px-8 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base min-h-[48px]"
            >
              Join Discord Here
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




