import React from "react";

const Post = ({ id, title, description }) => {
	return (
		<div className='py-4 md:py-10'>
			<h2 className='text-2xl md:text-4xl font-medium text-black pb-2 md:pb-6'>
				#{id}: {title}
			</h2>
			<p className='text-base md:text-2xl font-normal text-black'>
				{description}
			</p>
		</div>
	);
};

export default Post;
