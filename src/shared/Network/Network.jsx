import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import img1 from "../../assets/images/network1.png";
import img2 from "../../assets/images/network2.png";
import img3 from "../../assets/images/network3.png";
import img4 from "../../assets/images/network4.png";
import img5 from "../../assets/images/network5.png";

const Network = () => {
	return (
		<section className='container mx-auto py-10'>
			<div className='text-left border-b-4 border-primary'>
				<h2 className='text-primary text-2xl md:text-3xl font-bold pb-3'>
					Outmaker Instagram Network
				</h2>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-1'>
				<div
					className='w-100  h-52 relative mb-4 lg:mb-0'
					style={{
						backgroundImage: `url(${img1})`,
						backgroundSize: "cover",
					}}>
					<BsFillPlayFill
						size={50}
						className='mx-auto w-10 mt-[100px] p-1'
						color='white'
					/>
					<div className='absolute inset-0 bg-cover bg-center z-0'></div>
					<p className='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-xs text-white font-normal bg-black p-1'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div
					className='w-100  h-52 relative mb-4 lg:mb-0'
					style={{
						backgroundImage: `url(${img2})`,
						backgroundSize: "cover",
					}}>
					{/* <FaRegCopy size={50} className='ml-auto w-8 p-1' color='white' /> */}
					<div className='absolute inset-0 bg-cover bg-center z-0'></div>
					<p className='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-xs text-white font-normal bg-black p-1'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div
					className='w-100  h-52 relative mb-4 lg:mb-0'
					style={{
						backgroundImage: `url(${img3})`,
						backgroundSize: "cover",
					}}>
					<FaRegCopy size={50} className='ml-auto w-8 p-1' color='white' />
					<div className='absolute inset-0 bg-cover bg-center z-0'></div>
					<p className='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-xs text-white font-normal bg-black p-1'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div
					className='w-100  h-52 relative mb-4 lg:mb-0'
					style={{
						backgroundImage: `url(${img4})`,
						backgroundSize: "cover",
					}}>
					{/* <FaRegCopy size={50} className='ml-auto w-8 p-1' color='white' /> */}
					<div className='absolute inset-0 bg-cover bg-center z-0'></div>
					<p className='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-xs text-white font-normal bg-black p-1'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div
					className='w-100  h-52 relative mb-4 lg:mb-0'
					style={{
						backgroundImage: `url(${img5})`,
						backgroundSize: "cover",
					}}>
					<FaRegCopy size={50} className='ml-auto w-8 p-1' color='white' />
					<div className='absolute inset-0 bg-cover bg-center z-0'></div>
					<p className='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-xs text-white font-normal bg-black p-1'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Network;
