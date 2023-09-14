import { pricing } from "@/config/pricing";
import { PricingCard } from "@/components/pricing/pricing-card";

export default function Pricing() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-5">
        {Object.keys(pricing).map((item, index) => {
          return (
            <PricingCard
              key={index}
              name={pricing[item].name}
              desc={pricing[item].description}
              features={pricing[item].features}
              price={pricing[item].price}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <p className="max-w-4xl text-center">
          <strong>Attention:</strong> This product is currently in beta phase.
          As a result, no payment gateways have been integrated yet. CollabSync
          is completely open-source, and it&apos;s not available for sale at
          this time. However, you can still enjoy the premium features during
          this beta phase, and you are allowed to use them up to two times. We
          appreciate your support and feedback as we work towards a full
          release.
        </p>
      </div>
    </div>
  );
}
