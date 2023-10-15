import React from "react";

const PageNav = () => {
	return (
		<>
			<nav className='pt-4'>
				<ul className='flex text-sm text-[#000000] font-normal'>
					<li className='me-6 pb-1 border-b-2 border-b-black'>Home</li>
					<li className='font-semibold'>Blogs</li>
				</ul>
			</nav>
			<nav className='py-8'>
				<ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between text-base md:text-xl text-primary font-bold text-center'>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary me-1 mb-1 md:me-0 md:mb-0'>
						All
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary me-1 mb-1 md:me-0 md:mb-0'>
						Design Tips
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary me-1 mb-1 md:me-0 md:mb-0'>
						How to
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary me-1 mb-1 md:me-0 md:mb-0'>
						Room Inspiration
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary me-1 mb-1 md:me-0 md:mb-0'>
						Outmaker
					</li>
				</ul>
			</nav>
		</>
	);
};

export default PageNav;
