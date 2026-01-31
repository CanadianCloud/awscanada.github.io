export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="bg-[#f8f8f8] rounded-2xl sm:rounded-3xl py-10 sm:py-12 md:py-16 px-4 sm:px-8 text-center">
          <h2 className="text-[21px] sm:text-lg md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 max-w-4xl mx-auto px-4">
            Looking to connect with AWS Usergroups around the world?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 sm:mb-8 mx-auto px-4 whitespace-normal">
            Visit the Global AWS Community site for tips, resources, and AWS usergroups worldwide.
          </p>
          <a
            href="https://awsusergroups.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-[16px] text-gray-900 mx-auto pb-1 transition-colors duration-200 hover:text-gray-700"
            style={{ width: "fit-content" }}
          >
            <span className="relative inline-flex items-center">
              <span
                className="inline-block transition-transform duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
              <span
                className="ml-1 transition-transform duration-200"
                id="cta-link-text"
              >
                Go to Global Site
              </span>
              <span
                className="absolute right-0 -bottom-0.5 h-px bg-gray-900 transition-all duration-200 origin-right pointer-events-none underline-cta"
                style={{ width: '100%' }}
                aria-hidden="true"
              />
              <style>{`
                .group:hover .underline-cta {
                  width: calc(100% + 2ch) !important;
                }
              `}</style>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

