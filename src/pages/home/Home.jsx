import React from "react";
import Header from "./header";
import Collection from "./collection";
import Stylish from "./stylish";
import Envoirment from "./envoirment";
import Meterials from "./meterials";
import Review from "./review";
import mic from "../../assets/images/mic.png";
import IconSection from "../../components/IconSection/IconSection";
import UserInitialization from "../../components/UserInitialization/UserInitialization";

const Home = () => {
	return (
		<main className='relative'>
			<Header />
			<Collection />
			<Stylish />
			<Envoirment />
			<Meterials />
			<Review />
			<IconSection/>
			<UserInitialization/>
		</main>
	);
};

export default Home;
