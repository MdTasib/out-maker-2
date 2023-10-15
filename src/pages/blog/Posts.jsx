import React from "react";
import img from "../../assets/images/blog-section.png";
import Post from "./Post";

const Posts = () => {
	return (
		<div>
			<img src={img} alt='' />

			<div className='px-0 md:px-14'>
				<Post
					id='1'
					title='CREATE VISUAL VIGNETTES.'
					description='Approach your open kitchen shelves in the same way you would a bookshelf and consider them to be curiosity cabinets filled with meaningful objects that catch your eye and add a hint of sentiment to your style. '
				/>
				<Post
					id='2'
					title='CONSIDER SCALE AND VERTICALITY.'
					description='Pair objects in various heights and shapes to encourage the eye to travel along the open shelf. Stack plates in uneven piles next to an abstract art piece that’s leaning against the wall followed by a vintage vessel with branches that add height and a statuesque quality. Keep moving things around until the right combination sticks.'
				/>
				<Post
					id='3'
					title='ORIENT EACH SHELF DIFFERENTLY.'
					description='If you have more than one shelf, style them in slightly different ways to create a subtle offbeat design that allows for a perfectly imperfect finish. If it’s feeling too perfect, adjust your pieces so they are slightly uneven, and ditch the symmetry for irregularity. Just like the aged patina of an old clay vessel, there is always beauty in the blemishes.'
				/>
				<Post
					id='4'
					title='TAKE PHOTOS TO ASSESS AND REASSESS YOUR PROGRESS.'
					description='If you’re feeling overwhelmed, take a step back and photograph your open kitchen shelves on your iPhone. The gaps or flat spots will be immediately visible when you can assess the open shelf design as an entire tableau. Then you can make adjustments, tweak the styling, and add that finishing touch you were missing.'
				/>
				<Post
					id='5'
					title='DON’T FORGET YOUR FOCAL POINT.'
					description='Fusing aesthetic eras and styles will enliven your open-shelf design just as it does a room, but you will lose your vision without a focal point or anchor. Setting the scene with a neutral foundation helps to bring much-needed cohesion to the space. On Calderone’s marble shelves, a trifecta of 1950s Italian wall lamps can live alongside a curvy wrought-iron lamp with a rattan shade because the shelves are grounded in similar shades, hues, and tones that unify them.'
				/>
			</div>
		</div>
	);
};

export default Posts;
