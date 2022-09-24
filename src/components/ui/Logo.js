import LogoImage from '../../assets/logo.png'

const Logo = ({ className }) => {
	return (
		<img src={LogoImage} alt="Logo" className={`max-h-12 ${className}`} />
	)
}

export default Logo
