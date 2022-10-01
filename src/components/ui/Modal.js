import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
	return <div className="backdrop" onClick={props.onClick} />
}

const ModalOverlay = (props) => {
	return (
		<div className="modal">
			<div>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('modal-portal')

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	)
}

export default Modal
