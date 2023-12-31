import React from "react";
import AllBlogsHeader from "./AllBlogsHeader";
import PageNav from "./PageNav";
import FeatureArticle from "./FeatureArticle";
import LatestArticle from "./LatestArticle";
import Ideas from "./Ideas";
import Network from "../../shared/Network/Network";
import Video from "./Video";
import Projects from "./Projects";
import UserInitialization from "../../components/UserInitialization/UserInitialization";

const AllBlogs = () => {
	return (
		<main>
			<AllBlogsHeader />
			<div className='w-full'>
				<PageNav />
				<FeatureArticle />
				<LatestArticle />
				<Ideas />
				<Video />
				<Projects />
				<Network />
				<UserInitialization/>
			</div>
		</main>
	);
};

export default AllBlogs;
