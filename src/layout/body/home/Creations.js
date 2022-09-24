import React from 'react'

const Creations = () => {
	return (
		// <!-- Creations Section -->
		<section id="creations">
			{/* <!-- Creations Container --> */}
			<div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
				{/* <!-- Creations Header --> */}
				<div className="flex justify-center mb-20 md:justify-between">
					<h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
						Our Creations
					</h2>

					<button className="hidden btn md:block">
						See All
					</button>
				</div>

				{/* <!-- Items Container --> */}
				<div className="item-container">
					{/* <!-- Item 1 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-deep-earth.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-deep-earth.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>Deep Earth</h5>
					</div>

					{/* <!-- Item 2 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-night-arcade.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-night-arcade.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>Night Arcade</h5>
					</div>

					{/* <!-- Item 3 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-soccer-team.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-soccer-team.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>Soccer Team VR</h5>
					</div>

					{/* <!-- Item 4 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-grid.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-grid.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>The Grid</h5>
					</div>
				</div>

				{/* <!-- Item Container 2 --> */}
				<div className="item-container mt-10">
					{/* <!-- Item 1 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-from-above.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-from-above.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>From Up Above VR</h5>
					</div>

					{/* <!-- Item 2 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-pocket-borealis.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-pocket-borealis.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>Pocket Borealis</h5>
					</div>

					{/* <!-- Item 3 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-curiosity.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-curiosity.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>The Curiosity</h5>
					</div>

					{/* <!-- Item 4 --> */}
					<div className="group item">
						{/* <!-- Desktop Image --> */}
						<img
							src="images/desktop/image-fisheye.jpg"
							alt=""
							className="hidden w-full duration-200 md:block group-hover:scale-110"
						/>
						{/* <!-- Mobile Image --> */}
						<img
							src="images/mobile/image-fisheye.jpg"
							alt=""
							className="w-full md:hidden"
						/>
						{/* <!-- Item Gradient --> */}
						<div className="item-gradient"></div>
						{/* <!-- Item Text --> */}
						<h5>Make It Fisheye</h5>
					</div>
				</div>
				{/* <!-- Bottom Button Container --> */}
				<div className="flex justify-center mt-10 md:hidden">
					<button className="btn w-full md:hidden">
						See All
					</button>
				</div>
			</div>
		</section>
	)
}

export default Creations
