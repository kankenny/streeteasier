import React from 'react'

import profileImg from '../../assets/profile/dummy-profile-pic.jpg'

function ProfileImage() {
	return (
		<div className="flex flex-wrap justify-center hover:scale-110 duration-200 ">
			<div className="w-full flex justify-center">
				white
				<div className="relative">
					<img
						src={profileImg}
						alt="PFP"
						className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] max-h-[150px]"
					/>
				</div>
			</div>
		</div>
	)
}

export default ProfileImage
