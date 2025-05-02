
import React from 'react';
import { Button } from './ui/button';
import { Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-brand-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="bg-white rounded-full p-3">
            <Shield className="h-8 w-8 text-brand-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Start Saving Together Today
          </h2>
          <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of savings circles who are achieving their financial goals faster with CircleSave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-2">
            <Button size="lg" variant="secondary" className="text-brand-600 font-medium">
              Create Your Free Circle
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
