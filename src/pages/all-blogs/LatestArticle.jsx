import React from "react";
import articleUser1 from "../../assets/images/latest-article-user-1.png";
import articleUser2 from "../../assets/images/latest-article-user-2.png";
import articleUser3 from "../../assets/images/latest-article-user-3.png";
import articleUser4 from "../../assets/images/latest-article-user-4.png";
import article1 from "../../assets/images/latest-article-1.png";
import article2 from "../../assets/images/latest-article-2.png";
import article3 from "../../assets/images/latest-article-3.png";
import article4 from "../../assets/images/latest-article-4.png";

const articles = [
	{
		id: 1,
		title: "Inside Studio McGee’s First-Ever Spec Home",
		image: article1,
		user: articleUser1,
		userName: "Tom Halland",
		date: "11/10/2021",
	},
	{
		id: 2,
		title: "Our Five Design Love Languages | No. 05 One With Nature",
		image: article2,
		user: articleUser2,
		userName: "Xiao Chen",
		date: "01/07/2023",
	},
	{
		id: 3,
		title: "McGee & Co. Vintage | History Behind the Pieces",
		image: article3,
		user: articleUser3,
		userName: "Rohima",
		date: "28/02/2018",
	},
	{
		id: 4,
		title: "How to Clean & Care for Your Outdoor Furniture",
		image: article4,
		user: articleUser4,
		userName: "Wicka",
		date: "25/12/2022",
	},
];

const LatestArticle = () => {
	return (
		<section>
			<h4 className='text-2xl md:text-3xl font-bold text-primary border-b-4 border-primary'>
				Latest Articles
			</h4>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-4'>
				{articles.map(article => (
					<div className='flex justify-between py-2'>
						<div className='basis-1/3 mr-2'>
							<img src={article.image} alt='' className='w-full h-full' />
						</div>
						<div className='basis-2/3 border-b-4 border-[#B8B8B8] flex flex-col justify-between'>
							<h5 className='text-sm lg:text-xl font-medium text-black'>
								{article.title}
							</h5>

							<div className='flex items-center justify-between gap-[6px] md:gap-3 text-xs lg:text-base text-[#213343] font-normal pb-1'>
								<div className='flex items-center gap-2'>
									<img src={article.user} alt='' className='w-10' />
									<span className=''>{article.userName}</span>
								</div>
								<span>{article.date}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default LatestArticle;
