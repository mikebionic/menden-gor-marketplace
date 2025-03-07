import {Component} from 'react'

import { ErrorIndicator } from 'modules/errors/ErrorIndicator'

export default class ErrorBoundary extends Component {

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({
			hasError: true
		})
	}

	render() {

		if (this.state.hasError){
			return <ErrorIndicator />
		}
		return this.props.children
	}
}