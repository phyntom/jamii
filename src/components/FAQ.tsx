
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: "How does CircleSave ensure the security of our group's funds?",
    answer: "CircleSave is a contribution tracking platform, not a financial institution. We don't hold your money, but rather provide transparency and tracking tools. Your group's administrators manage the actual funds according to your group's policies."
  },
  {
    question: "Can we upgrade from Free to Standard plan later?",
    answer: "Absolutely! You can upgrade at any time. Your existing group data will seamlessly transfer to your new plan, and you'll gain immediate access to all premium features."
  },
  {
    question: "How are contribution amounts verified?",
    answer: "Group administrators can verify contributions by confirming receipt of funds. The platform provides tools for admins to mark contributions as 'verified' once they've confirmed payment."
  },
  {
    question: "What happens if someone misses a contribution?",
    answer: "CircleSave provides notification systems to remind members of upcoming and missed contributions. Group administrators can set policies for late contributions within the platform."
  },
  {
    question: "Can we customize our contribution schedule?",
    answer: "Yes! CircleSave supports flexible contribution schedules. You can set up weekly, bi-weekly, monthly, or custom schedules based on your group's needs."
  },
  {
    question: "How does the loan module work?",
    answer: "The loan module, available on the Standard plan, allows group administrators to track loans made to members from the group's funds. It includes tools for tracking repayment schedules, interest if applicable, and outstanding balances."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500 mx-auto max-w-[700px]">
            Find answers to common questions about CircleSave.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
