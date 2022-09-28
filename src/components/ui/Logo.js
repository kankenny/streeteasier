import LogoImage from '../../assets/projectLogo.png'
import { Link } from 'react-router-dom'

const Logo = ({ className }) => {
	return (
		<Link to="/welcome">
			<img
				src={LogoImage}
				alt="Logo"
				className={`h-16 pt-2 ${className}`}
			/>
		</Link>
	)
}

export default Logo

// https://www.freelogodesign.org/manager/showcase/79a5301d242d4fa5bdeffa41d85d87d9
