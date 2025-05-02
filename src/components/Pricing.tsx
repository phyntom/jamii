
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for small savings groups just getting started.",
    features: [
      "1 admin group",
      "Up to 20 users",
      "Maximum of 25K contribution amount",
      "Weekly savings reminders",
      "Basic loan eligibility check (non-binding)",
      "Access to community FAQs and support guides",
      "Notifications for group activity",
      "Push notifications"
    ],
    notIncluded: [
      "Loan module",
      "In-app chat with group members",
      "Stripe Integration"
    ],
    cta: "Start for free",
    popular: false
  },
  {
    name: "Standard",
    price: "19",
    description: "The perfect solution for growing savings circles.",
    features: [
      "Up to 4 admin groups",
      "Up to 50 users",
      "Maximum of 100K contribution amount",
      "Loan module",
      "Weekly savings reminders",
      "Basic loan eligibility check",
      "In-app chat with group members",
      "Access to community FAQs and support guides",
      "Notifications for group activity",
      "Push notifications",
      "Stripe Integration"
    ],
    notIncluded: [],
    cta: "Get Started",
    popular: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500 mx-auto max-w-[700px]">
            Choose the plan that's right for your savings circle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`rounded-lg p-8 shadow-lg border ${
                tier.popular 
                  ? 'border-brand-500 ring-1 ring-brand-500' 
                  : 'border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
              </div>
              
              <p className="mt-4 text-gray-500">{tier.description}</p>
              
              <Button 
                className={`mt-8 w-full ${!tier.popular ? 'bg-brand-500 hover:bg-brand-600' : ''}`}
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.cta}
              </Button>
              
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
                
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex text-gray-400">
                    <X className="h-6 w-6 flex-shrink-0" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
