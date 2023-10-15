import React from "react";
import BlogHeader from "./BlogHeader";
import Posts from "./Posts";
import Articels from "./Articels";
import Network from "../../shared/Network/Network";
import mic from "../../assets/images/mic.png";
import UserInitialization from "../../components/UserInitialization/UserInitialization";

const Blog = () => {
	return (
		<main className='w-full relative'>
			<BlogHeader />
			<Posts />
			<Articels />
			<Network />

			<div className='absolute right-0 bottom-[0px]'>
				<img src={mic} alt='' className='w-3/4 md:w-full' />
			</div>
			{/* to generate a rnadom number when user will land on this page */}
			<UserInitialization/>
		</main>
	);
};

export default Blog;
