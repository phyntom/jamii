
import React from 'react';
import { Shield, DollarSign, Users, Bell, CheckCircle, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    title: "Group Contributions",
    description: "Easily contribute your monthly share and see real-time updates from all group members."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-500" />,
    title: "Admin Verification",
    description: "Group admins verify each contribution to ensure transparency and accuracy."
  },
  {
    icon: <BarChart className="h-6 w-6 text-brand-500" />,
    title: "Full Visibility",
    description: "See exactly who has contributed what and when, promoting accountability within your group."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-brand-500" />,
    title: "Loan Module",
    description: "Access to loan eligibility features for your group members (available in paid plans)."
  },
  {
    icon: <Bell className="h-6 w-6 text-brand-500" />,
    title: "Savings Reminders",
    description: "Never miss a contribution with weekly automated reminders."
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-500" />,
    title: "Secure Platform",
    description: "Your financial data is protected with enterprise-grade security protocols."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Features Built for Group Success
          </h2>
          <p className="mt-4 text-lg text-gray-500 mx-auto max-w-[800px]">
            All the tools your savings group needs to manage contributions, track progress, and reach your goals together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-brand-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
