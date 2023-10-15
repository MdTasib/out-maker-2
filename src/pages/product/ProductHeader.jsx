import React from "react";
import headerImage from "../../assets/images/productHeader.png";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";

const ProductHeader = ({product, category}) => {
	console.log(product);
	return (
		<header
			className='hero h-[50vh] lg:h-[600px]'
			style={{ backgroundImage: `url(${ImgBaseUrl(category ? product?.collection_pic : product?.category_pic)})`}}>
			<div className='hero-content text-center'>
				<div className='max-w-full'>
					<p className='pb-4 text-white'>{category ? 'CATEGORY' : "COLLECTION"}</p>
					<h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-semibold uppercase'>{category ? product?.collection_name : product?.category_name}</h1>
				</div>
			</div>
		</header>
	);
};

export default ProductHeader;
