import volunteerIcon from '../../assets/icons/icons8-volunteer-100.png';
import microphoneIcon from '../../assets/icons/icons8-microphone-100 (1).png';
import starIcon from '../../assets/icons/icons8-star-100 (1).png';

export default function GetInvolved() {
  const cards = [
    {
      icon: volunteerIcon,
      titleLine1: 'Join Our',
      titleLine2: 'Volunteers',
      description: 'Connect with the local community by lending a hand at our next event.',
      link: 'https://tally.so/r/w7BkgA',
    },
    {
      icon: microphoneIcon,
      titleLine1: 'Share',
      titleLine2: 'Your Voice',
      description: 'We\'re looking for passionate speakers to inspire our AWS community.',
      link: 'https://tally.so/r/wv79vQ',
    },
    {
      icon: starIcon,
      titleLine1: 'Partner',
      titleLine2: 'With Us',
      description: 'Your support goes directly toward food and drinks for 100 AWS innovators.',
      link: 'https://tally.so/r/mBORVN',
    },
  ];

  return (
    <section id="get-involved" className="py-12 sm:py-16 md:py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col px-4 sm:px-8 py-8 sm:py-12 md:py-8"
            >
              {/* Icon + Title Row */}
              <a 
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src={card.icon}
                  alt={`${card.titleLine1} ${card.titleLine2}`}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <h3 className="text-[17px] sm:text-xl font-bold text-white leading-tight">
                  {card.titleLine1}<br />
                  {card.titleLine2}
                </h3>
              </a>
              {/* Description */}
              <p className="text-gray-300 text-base md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




