import { useState } from 'react';
import eventsImage from '@/assets/gallery/AWSDay24-050.jpg';
import aboutImage from '@/assets/gallery/AWSDay24-092.jpg';
import involvedImage from '@/assets/gallery/AWSDay24-119.jpg';

type SectionKey = 'events' | 'about' | 'involved';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  image: string;
  items: FAQItem[];
}

type FAQData = Record<SectionKey, FAQSection>;
type OpenItems = Record<SectionKey, number | null>;

function FAQ() {
  // FAQ data moved back into the component for simplicity
  const faqData: FAQData = {
    events: {
      title: 'Events',
      image: eventsImage,
      items: [
        {
          question: 'When and where do you meet?',
          answer: 'We host meetups bi-monthly in downtown Vancouver, usually on a weekday after 4 PM. Venue and exact time may vary for each event, so please check the RSVP link on the site for details.',
        },
        {
          question: 'Are events free?',
          answer: 'We try to make our events free. Sometimes we charge a small $5 fee to help with crowd control and to cover food costs.',
        },
        {
          question: "What's the difference between regular meetups and the big annual events?",
          answer: 'Regular meetups are smaller gatherings of 50-100 people, focused on community networking and learning. We also help host the large annual Cloud Summit Vancouver www.CloudSummit.ca and AWS Community Day Vancouver www.AWSday.ca .',
        },
        {
          question: 'How do I RSVP?',
          answer: 'All RSVPs are handled through Lu.ma. You\'ll find the link to each event on this website.',
        },
        {
          question: 'Is food or drink provided?',
          answer: 'Sometimes, depending on the event and sponsorship. Please check the event details.',
        },
        {
          question: 'Are recordings or slides shared after events?',
          answer: 'Not always — this varies depending on the speaker and event.',
        },
      ],
    },
    about: {
      title: 'About the Group',
      image: aboutImage,
      items: [
        {
          question: 'When did the group start?',
          answer: 'The AWS User Group Vancouver held it\'s first event ever in 2014, with monthly events until covid when we shifted gears to do monthly online events and twitch commentary on AWS events like reInvent. Then once covid restrictions ended we resurfaced to start doing in-person events again and started doing the annual AWS Community Day.',
        },
        {
          question: 'Are you a business?',
          answer: 'No. We are a registered not-for-profit society, and our events are 100% volunteer-run. None of the organizers or volunteers are paid.',
        },
        {
          question: 'Do you have a Code of Conduct?',
          answer: 'Yes. All events are covered by our Code of Conduct, which ensures a safe and inclusive environment. Please note that events may sometimes be recorded.',
        },
        {
          question: 'What is the goal of the group?',
          answer: 'Our mission is to create a space to share knowledge, network, and learn together in the Vancouver cloud community.',
        },
      ],
    },
    involved: {
      title: 'Get Involved',
      image: involvedImage,
      items: [
        {
          question: 'How can I volunteer?',
          answer: 'There is a form on this website to sign up as a volunteer.',
        },
        {
          question: 'What is involved in volunteering?',
          answer: 'It\'s up to you. Let us know what your skills are and we\'ll do our best to provide a rewarding experience. It could be as simple as greating, or more complex like looking after the AV gear. It could even be helping online with the discord channel, newsletter, website, etc.',
        },
        {
          question: 'How can I give a talk?',
          answer: 'We welcome community speakers! Talks should be educational and vendor-neutral. You may mention where you work when introducing yourself, but marketing or sales pitches are not allowed. Violating this rule will result in not being invited back. Submit your talk idea using the form on this website.',
        },
        {
          question: 'How can my company sponsor?',
          answer: 'Details are available in the sponsorship form on this website. For sponsors we will promote you and let everyone know about the amazing support you\'re providing.',
        },
      ],
    },
  };

  const [openItems, setOpenItems] = useState<OpenItems>({ events: null, about: null, involved: null });
  const toggleItem = (section: SectionKey, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-3xl mx-auto px-4">
            Got questions? We've grouped the most common ones below to help you get the most out of our community events.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Events Section */}
          <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
            {/* FAQ */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{faqData.events.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {faqData.events.items.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems['events'] === index
                        ? 'bg-orange-400 border-orange-400'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem('events', index)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between transition-colors duration-200 min-h-[48px] ${
                        openItems['events'] === index
                          ? 'text-gray-900'
                          : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium pr-3 sm:pr-4 text-sm sm:text-base">{item.question}</span>
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                          openItems['events'] === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        openItems['events'] === index
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                          <p className="text-gray-900 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="hidden md:block self-center">
              <img src={faqData.events.image} alt="" className="w-full h-[340px] rounded-2xl object-cover" />
            </div>
          </div>

          {/* About the Group Section */}
          <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
            {/* Image */}
            <div className="hidden md:block">
              <img src={faqData.about.image} alt="" className="w-full h-[340px] rounded-2xl object-cover" />
            </div>
            {/* FAQ */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{faqData.about.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {faqData.about.items.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems['about'] === index
                        ? 'bg-orange-400 border-orange-400'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem('about', index)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between transition-colors duration-200 min-h-[48px] ${
                        openItems['about'] === index
                          ? 'text-gray-900'
                          : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium pr-3 sm:pr-4 text-sm sm:text-base">{item.question}</span>
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                          openItems['about'] === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        openItems['about'] === index
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                          <p className="text-gray-900 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
            {/* FAQ */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{faqData.involved.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {faqData.involved.items.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems['involved'] === index
                        ? 'bg-orange-400 border-orange-400'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem('involved', index)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between transition-colors duration-200 min-h-[48px] ${
                        openItems['involved'] === index
                          ? 'text-gray-900'
                          : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium pr-3 sm:pr-4 text-sm sm:text-base">{item.question}</span>
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                          openItems['involved'] === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        openItems['involved'] === index
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                          <p className="text-gray-900 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="hidden md:block">
              <img src={faqData.involved.image} alt="" className="w-full h-[340px] rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;






