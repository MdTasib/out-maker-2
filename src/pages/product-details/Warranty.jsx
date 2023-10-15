import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../shared/Button/Button";

const Warranty = () => {
	return (
		<section className='container mx-auto p-4 md:p-10'>
			<h4 className='text-primary text-2xl font-semibold uppercase'>
				Warranty
			</h4>
			<p className='text-base font-normal text-[#666666] py-4 leading-loose'>
				At Yardbird, we take great pride in our outdoor furniture and we strive
				to bring you the best quality at the best price. We guarantee our
				product to be free of any manufacturing flaws in workmanship and
				materials. Ultimately, we will work hard to assure you are happy with
				your Yardbird purchase. We have one of the industry best warranties.
			</p>

			<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal'>
				Cleaning Instructions <BsArrowRight className='ms-2' />
			</Button>

			<h5 className='text-xl font-semibold text-primary pt-6'>We Cover:</h5>
			<ul className='list-disc text-primary pl-4'>
				<li>
					Any defects from craftsmanship will be replaced within 3 years of your
					purchase
				</li>
				<li>
					Our Sunbrella fabric has a 5 year warranty and frames have a 10 year
					warranty
				</li>
				<li>
					Adirondack chair components are warrantied under normal use for 5
					years from the date of shipment
				</li>
				<li>Umbrellas are covered by their</li>
			</ul>
		</section>
	);
};

export default Warranty;
