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
          answer: 'Not always. This varies depending on the speaker and event.',
        },
      ],
    },
    about: {
      title: 'About the Group',
      image: aboutImage,
      items: [
        {
          question: 'When did the group start?',
          answer: 'The AWS User Group Vancouver held its first event in 2014, with monthly events until covid when we shifted gears to do monthly online events and twitch commentary on AWS events like reInvent. Then once covid restrictions ended we resurfaced to start doing in-person events again and started doing the annual AWS Community Day.',
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
          answer: 'It\'s up to you. Let us know what your skills are and we\'ll do our best to provide a rewarding experience. It could be as simple as greeting, or more complex like looking after the AV gear. It could even be helping online with the community chat, newsletter, website, etc.',
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

  return (
    <section id="faq" className="faq-section shell section-space" aria-labelledby="faq-title">
      <div className="faq-layout">
        <div className="faq-heading"><p className="eyebrow">04 / Frequently asked questions</p><h2 id="faq-title" className="display-heading">A little<br />more clarity.</h2><p>New here? Start with a few of the things people ask us most.</p></div>
        <div className="faq-groups">
          {Object.entries(faqData).map(([key, group]) => (
            <details className="faq-group faq-category" id={`faq-${key}`} name="faq-categories" key={key}>
              <summary>
                <h3>{group.title}</h3>
                <span className="category-toggle" aria-hidden="true"><span className="category-plus">+</span><span className="category-minus">−</span></span>
              </summary>
              <div className="faq-category-content">
                {group.items.map(item => (
                  <details key={item.question} name={`faq-${key}-questions`}>
                    <summary><span>{item.question}</span><span aria-hidden="true"><span className="faq-plus">+</span><span className="faq-minus">−</span></span></summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQ;
