import LogoImage from '../../assets/projectLogo.png'

const Logo = ({ className }) => {
	return (
		<a href="#body">
			<img
				src={LogoImage}
				alt="Logo"
				className={`max-h-[5rem] ${className}`}
			/>
		</a>
	)
}

export default Logo

// https://www.freelogodesign.org/manager/showcase/79a5301d242d4fa5bdeffa41d85d87d9
