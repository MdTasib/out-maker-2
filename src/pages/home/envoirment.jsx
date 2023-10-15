import React from "react";
import envoirmentImg from "../../assets/images/envoirment.png";
import Button from "../../shared/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Envoirment = () => {
	return (
		<section className='w-full pb-20 pt-10'>
			<div className='grid items-center grid-cols-1 md:grid-cols-2'>
				<div className='mb-6 md:mb-0'>
					<h4 className='text-primary text-2xl md:text-4xl font-semibold'>
						Our Product Protect <br />
						Our Envoirment
					</h4>
					<p className='text-[#666666] text-xs font-normal py-6'>
						HipVan is proud to be founded in Singapore. Like you, we're young
						adults who care about creating an inspiring home we call our own.
						The problem of limited furnishing options, high retail mark-ups.
					</p>
					<Link to='/sustainability'>
					<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white'>
						Our Sustainability Efforts <BsArrowRight className='ms-2' />
					</Button>
					</Link>
				</div>
				<div className=''>
					<img src={envoirmentImg} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Envoirment;
