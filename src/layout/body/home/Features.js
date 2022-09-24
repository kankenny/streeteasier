import React from 'react'

import Bed from '../../../assets/home/bed.jpg'
import Card from '../../../components/ui/Card'

const homeContainerClasses =
	'relative container flex flex-col max-w-6xl m-10 my-16 px-6 text-gray-900 md:flex-row mx-auto'

const Features = () => {
	return (
		<section id="feature">
			<div className={homeContainerClasses}>
				<img
					src={Bed}
					alt="bed"
					className="min-w-full max-h-[100rem] aspect-auto rounded-xl shadow-lg"
				/>

				<Card className="md:absolute md:top-2 md:right-8 md:py-20 py-10">
					<h2 className="max-w-lg mb-6 text-3xl text-center text-gray-900 uppercase md:text-5xl md:mt-0">
						A hub to search for your next Home
					</h2>

					<p className="max-w-md text-center text-gray-500">
						StreetEasier Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Ullam fugit, vel
						labore sapiente quas inventore? Deserunt neque ut
						sequi ipsa quam. Animi soluta non totam ipsam
						quibusdam qui, earum, aperiam adipisci cum
						laudantium officiis porro impedit eum ex,
						exercitationem mollitia laborum possimus
						voluptatibus aspernatur quos molestias culpa.
						Quidem, vitae deserunt.
					</p>
				</Card>
			</div>
		</section>
	)
}

export default Features
