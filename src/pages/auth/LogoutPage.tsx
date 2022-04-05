import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

import { routeConstants } from "navigation"
import { authActions } from "sapredux/actions"

export const LogoutPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(authActions.logout())
		navigate(routeConstants.root.route)
	}, [])
	return (<></>)
}