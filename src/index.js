import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'
import App from './App'
import 'tw-elements'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</Router>
	</React.StrictMode>
)
