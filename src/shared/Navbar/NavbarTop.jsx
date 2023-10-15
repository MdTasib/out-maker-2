import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import langIcon from "../../assets/icons/english.svg";
import logo from '../../assets/Navbar/Frame.svg'

const NavbarTop = () => {
	return (
		<div className='bg-primary text-white py-3'>
			<div className='w-full px-4 md:px-10'>
				<div className='flex justify-between items-center'>
					<div className=''>
						<span className='flex items-center text-xs'>
							<BsFillTelephoneFill className='me-2' />
							(704) 555-0127
						</span>
					</div>
					<p className='hidden lg:flex text-xs'>
						Black Friday Deals Here! 30-40%
						<AiOutlineArrowRight className='ms-2' />
					</p>
					<div className='flex items-center gap-2 text-xs'>
						<p className='pe-3 hidden'>Order tracking</p>
						<p className='pe-3'>Help</p>
						<img className='pe-1 w-5' src={langIcon} alt='' />
						<select className='select select-sm select-primary bg-primary text-xs w-24 p-0'>
							<option  defaultValue='English'>English</option>
							{/* <option>Bangla</option> */}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarTop;
