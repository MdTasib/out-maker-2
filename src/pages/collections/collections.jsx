import React from "react";
import PageNav from "./PageNav";
import Blogs from "./blogs";
import Network from "../../shared/Network/Network";
import mic from "../../assets/images/mic.png";
import UserInitialization from "../../components/UserInitialization/UserInitialization";

const Collections = () => {
	return (
		<main className='w-full relative'>
			<PageNav />
			<Blogs />
			<Network />
			<div className='absolute right-0 bottom-[0px]'>
				<img src={mic} alt='' className='w-3/4 md:w-full' />
			</div>
			<UserInitialization/>
		</main>
	);
};

export default Collections;
