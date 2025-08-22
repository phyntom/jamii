import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section className='py-16 md:py-24 hero-pattern'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
							Achieve More <span className='text-brand-500'>Together</span> with Shared Savings
						</h1>
						<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl'>
							A secure platform for groups to save money collectively, track contributions, and achieve financial goals
							as a community.
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-4 min-[400px]:gap-2'>
						<Button size='lg' className='text-md'>
							Start Saving Free
						</Button>
						<Button size='lg' variant='outline' className='text-md'>
							See how it works
						</Button>
					</div>
					<div className='mt-8 rounded-lg overflow-hidden shadow-xl border border-brand-100'>
						{/* <img
              alt="Dashboard preview"
              className="w-full aspect-video object-cover"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            /> */}
					</div>
					<div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center'>
						<div className='flex items-center space-x-1'>
							<div className='flex -space-x-2'>
								<img
									alt='User'
									className='w-8 h-8 rounded-full border-2 border-white'
									src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop'
								/>
								<img
									alt='User'
									className='w-8 h-8 rounded-full border-2 border-white'
									src='https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop'
								/>
								<img
									alt='User'
									className='w-8 h-8 rounded-full border-2 border-white'
									src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop'
								/>
							</div>
							<span className='text-sm font-medium'>Join over 10,000 savers</span>
						</div>
						<div className='flex items-center'>
							<svg className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 24 24'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z' />
							</svg>
							<svg className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 24 24'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z' />
							</svg>
							<svg className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 24 24'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z' />
							</svg>
							<svg className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 24 24'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z' />
							</svg>
							<svg className='w-4 h-4 text-yellow-400 fill-current' viewBox='0 0 24 24'>
								<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z' />
							</svg>
							<span className='ml-1 text-sm font-medium'>4.9/5 from 1,200+ reviews</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
