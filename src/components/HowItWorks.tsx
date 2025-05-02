
import React from 'react';
import { BadgeCheck } from 'lucide-react';

const steps = [
  {
    title: "Create Your Savings Circle",
    description: "Set up your group, define contribution amounts, and invite members to join your savings circle.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Make Regular Contributions",
    description: "Each member contributes their share on a monthly basis or according to your group's schedule.",
    image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Track & Verify Contributions",
    description: "Admins verify each contribution and all members can track the group's overall progress.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Achieve Financial Goals Together",
    description: "Reach milestones faster by pooling resources and keeping each other accountable.",
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1000&auto=format&fit=crop"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 mx-auto max-w-[700px]">
            Our platform makes group savings simple, transparent, and effective.
          </p>
        </div>
        
        <div className="space-y-16 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-lg blur opacity-25"></div>
                  <div className="relative aspect-video overflow-hidden rounded-lg border bg-background">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-800">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-gray-500 text-lg">{step.description}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <BadgeCheck className="h-5 w-5 text-brand-500" />
                      <span className="text-gray-600">
                        {index === 0 && i === 0 && "Create unlimited groups on paid plans"}
                        {index === 0 && i === 1 && "Customize contribution amounts"}
                        {index === 0 && i === 2 && "Simple member invitations via email"}
                        
                        {index === 1 && i === 0 && "Flexible payment schedules"}
                        {index === 1 && i === 1 && "Automated contribution reminders"}
                        {index === 1 && i === 2 && "Digital records of all transactions"}
                        
                        {index === 2 && i === 0 && "Real-time contribution tracking"}
                        {index === 2 && i === 1 && "Admin verification system"}
                        {index === 2 && i === 2 && "Complete transparency for all members"}
                        
                        {index === 3 && i === 0 && "Set and track group financial goals"}
                        {index === 3 && i === 1 && "Celebrate milestones together"}
                        {index === 3 && i === 2 && "Access reports on group progress"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
