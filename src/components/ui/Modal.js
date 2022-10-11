import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
	return <div className="backdrop" onClick={props.onClose} />
}

const ModalOverlay = (props) => {
	return (
		<div className="modal">
			<div
				onClick={(e) => e.stopPropagation()}
				className="h-full w-full overflow-scroll overflow-x-hidden"
			>
				{props.children}
			</div>
		</div>
	)
}

const portalElement = document.getElementById('modal-portal')

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClose} />,
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
