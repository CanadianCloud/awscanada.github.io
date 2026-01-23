import eventsData from '../../../events.json';

// Type definition for events from events.json
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  startAt: string;
  endAt: string;
  location: string;
  address: string;
  city: string;
  image: string;
  url: string;
  description: string;
  price: string | null;
  registrationCount: number;
}

export default function UpcomingEvents() {
  const events = eventsData as Event[];

  // Don't render section if no events
  if (events.length === 0) {
    return null;
  }

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 mb-2 sm:mb-3 px-0">
            Upcoming Events
          </h2>
          <p className="text-sm sm:text-base text-gray-700 px-0">
            Check out the upcoming events and get involved, your participation makes a difference!
          </p>
        </div>
        {/* Events Grid */}
        <div className="flex flex-col gap-8">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Event Image OUTSIDE the card */}
              <div className="w-full md:w-[160px] h-[110px] sm:w-[200px] sm:h-[130px] md:w-[260px] md:h-[160px] rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center md:mb-0 mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Event Card */}
              <div className="flex-1 bg-[#F8F8F8] border border-gray-200 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 flex flex-col justify-between min-h-[110px] sm:min-h-[130px] md:min-h-[160px] w-full md:w-auto">
                {/* Title and Date */}
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                    {event.date} · {event.time}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight break-words max-w-full md:max-w-[500px] sm:max-w-[650px] md:max-w-[800px] mb-1">
                    {event.title}
                  </h3>
                  {/* Location Info */}
                  <div className="flex flex-col gap-0.5 sm:gap-1 mb-0">
                    <div className="flex items-center text-gray-700 text-xs sm:text-sm">
                      <svg
                        className="w-4 h-4 mr-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <div className="text-xs text-gray-500">{event.address}</div>
                  </div>
                </div>
                {/* Button linking to specific event */}
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF9900] hover:bg-[#e88a00] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-200 shadow-sm text-sm font-normal min-w-[120px] mt-4 md:mt-1 md:self-end w-full md:w-auto flex items-center justify-center text-center"
                  aria-label={`Register for ${event.title}`}
                >
                  Save Your Spot →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
