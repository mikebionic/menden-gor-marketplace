import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { authActions } from 'sapredux/actions'

//import { sapswal } from 'sapredux/helpers'
import { Spinner } from 'modules/loaders'

export const GoogleAuth = () => {
	const [loading, set_loading] = useState(false)
	const dispatch = useDispatch()
	const handleLogin = async (googleData: any) => {
		set_loading(true)
		try {
			if (googleData.error) {
				throw "Couldn't complete auth"
			}

			let payload = {
				email: googleData.profileObj.email,
				username: googleData.profileObj.email.split('@')[0],
				fullName: googleData.profileObj.name,
				firstName: googleData.profileObj.givenName,
				lastName: googleData.profileObj.familyName,
				imageUrl: googleData.profileObj.imageUrl,
				googleId: googleData.profileObj.googleId,
				tokenId: googleData.tokenId,
				accessToken: googleData.accessToken,
			}
			dispatch(authActions.googleAuth(payload, set_loading, true))
		} catch (e: any) {
			set_loading(false)
			//sapswal.fire({
			//	title: 'Error',
			//	text: `Error authorizing with Google, \n ${e.toString()} \n Try another method instead.`,
			//	icon: 'error',
			//})
		}
	}
	return (
		<>
			{loading && <Spinner />}
			<GoogleLogin
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
				buttonText="Log in with Google"
				onSuccess={handleLogin}
				onFailure={handleLogin}
				cookiePolicy={'single_host_origin'}
				className="w-[70%] justify-center cursor-pointer bg-fullwhite dark:!bg-darkComponentColor dark:!opacity-100 google-login"
			/>
		</>
	)
}
