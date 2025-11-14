import PricingCard from "./pricingCard";
import Image from "next/image";

export default function HomePagePricingPlans() {
  return (
    <section
      id="pricing"
      className="bg-white py-16 px-8 font-['Space_Grotesk',sans-serif] text-center max-[768px]:py-4 max-[768px]:px-6"
    >
      <div className="mx-auto mb-12 max-[768px]:w-full max-[768px]:mb-8">
        <h2 className="text-[3rem] font-bold mb-4 text-black max-[1024px]:text-[2.4rem] max-[768px]:text-[2rem] max-[768px]:leading-[1.3] max-[480px]:text-[1.7rem]">
          Choose Your Career Acceleration Plan
        </h2>
        <p className="max-w-[35rem] mx-auto text-black text-[1.1rem] leading-[1.6] max-[1024px]:text-base max-[768px]:text-[0.95rem] max-[768px]:w-[90%] max-[480px]:text-[0.9rem]">
          All plans include our AI-powered job matching and application
          automation.
          <strong> Save 150+ hours monthly</strong> while we work for you 24/7.
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap mb-16 max-[1024px]:gap-5 max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-8">
        <PricingCard
          title="IGNITE"
          subTitle="250 Applications"
          description="Perfect for entry-level professionals"
          price="$199"
          oldPrice="$299"
          features={[
            "No Time Constraint",
            "AI-powered job matching",
            "Resume Optimization",
            "Basic Analytical Dashboard",
          ]}
          addOn={true}
          highlight={false}
          paymentLink="https://www.paypal.com/ncp/payment/F6CESAWAYUYU2"
        />

        <PricingCard
          title="PROFESSIONAL"
          tag="ECONOMICAL"
          subTitle="500 Applications"
          description="Most popular for mid-level professionals"
          price="$349"
          oldPrice="$449"
          features={[
            "Everything in Ignite",
            "Priority job matching",
            "Advance analytics & insights",
            "LinkedIn profile optimization",
            "Interview preparation tips",
          ]}
          addOn={true}
          highlight={false}
          paymentLink="https://www.paypal.com/ncp/payment/SMTK5UYQYM4A8"
        />

        <PricingCard
          title="EXECUTIVE"
          tag="MOST POPULAR"
          subTitle="1200 Applications"
          description="For senior professionals & executive"
          price="$599"
          oldPrice="$699"
          features={[
            "Everything in Professional",
            "Executive-level job targeting",
            "Portfolio development",
            "Cover Letters",
            "Network introduction requests",
            "Emailing Recruiters",
          ]}
          addOn={true}
          highlight={true}
          paymentLink="https://www.paypal.com/ncp/payment/CDRFGB6M566X8"
        />
      </div>

      {/* === Risk-Free Section === */}
      <div className="bg-[rgba(251,240,235,1)] w-full w-[1280px] h-[161px]py-8 border border-[#ff4c00]  mt-8">
        <div className="bg-white  mt-2 ml-2 mr-2 mb-2 mx-auto flex justify-between items-center p-8 max-[1320px]:w-[95%] max-[768px]:flex-col max-[768px]:text-center max-[768px]:h-auto max-[768px]:gap-5 max-[768px]:p-6">
          {/* Left Section */}
          <div className="flex items-center gap-4 flex-1">
            {/* Pixel Art Mascot - on the left */}
            <div className="flex-shrink-0 relative w-32 h-32">
              <Image
                src="/images/right logo.png"
                alt="Flashfire Mascot"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-left">
              <h3 className="text-3xl font-bold mb-2 text-black max-[768px]:text-xl">
                100% Risk Free
              </h3>
              <p className="text-base text-black leading-relaxed font-bold max-[768px]:text-sm max-[480px]:text-xs">
                If you didn&rsquo;t land interviews, we&rsquo;ll send{" "}
                <span className="text-[#ff4c00] italic font-bold">
                  150-200 more applications,
                </span>{" "}
                <span className="text-[#ff4c00] italic font-bold">
                  free of charge.
                </span>
                <br />
                Because at Flashfire, you only pay for progress.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-0 flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-black leading-tight">
                Flashfire
              </span>
              <span className="text-3xl font-bold text-black leading-tight">
                Guarantee
              </span>
            </div>

            {/* Orange Checkmark in Starburst Icon - on the right */}
            <div className="flex-shrink-0 relative w-32 h-32 -ml-6">
              <Image
                src="/images/Flashfire no bg.png"
                alt="Checkmark Badge"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
