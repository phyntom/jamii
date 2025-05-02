
import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    quote: "CircleSave completely transformed how our family savings group operates. The transparency and tracking features have eliminated confusion and disputes.",
    author: "Michael Johnson",
    role: "Family Savings Circle Admin",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
  },
  {
    quote: "As treasurer for our investment club, CircleSave has saved me countless hours of spreadsheet management and payment tracking.",
    author: "Sarah Williams",
    role: "Investment Club Treasurer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
  },
  {
    quote: "The loan module feature on the Standard plan made it possible for our group to help members during financial emergencies while maintaining clear records.",
    author: "David Chen",
    role: "Community Group Organizer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by Savings Groups Everywhere
          </h2>
          <p className="mt-4 text-lg text-gray-500 mx-auto max-w-[700px]">
            Here's what our users are saying about their experience with CircleSave.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="inline-block w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 mb-4">
                    <p className="text-gray-600">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      alt={testimonial.author}
                      className="rounded-full h-10 w-10 object-cover mr-3"
                      src={testimonial.avatar}
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
