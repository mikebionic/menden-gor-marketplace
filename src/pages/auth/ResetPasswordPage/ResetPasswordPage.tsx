import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'

import {
	ResetInputCard,
	ResetVerificationCard,
	ResetPasswordCard,
} from 'components/ResetPassword'

const ResetPasswordPage: React.FC = ({ loggedIn }: any) => {
	const [stage, set_stage] = useState(1)
	const [validationData, set_validationData] = useState({
		authMethod: '',
		credentials: '',
		validator_phone_number: '',
		responseMessage: '',
		registerToken: '',
	})

	const navigate = useNavigate()
	loggedIn && navigate('/')

	return (
		<div className="grid grid-flow-row place-items-center auto-rows-auto">
			<div>
				{stage === 1 && (
					<ResetInputCard
						onStageChange={(stage: number) => set_stage(stage)}
						handleValidationData={(data: any) => set_validationData(data)}
					/>
				)}
				{stage === 2 && (
					<ResetVerificationCard
						onStageChange={(stage: number) => set_stage(stage)}
						validationData={validationData}
						handleValidationData={(data: any) => set_validationData(data)}
					/>
				)}
				{stage === 3 && (
					<ResetPasswordCard
						onStageChange={(stage: number) => set_stage(stage)}
						validationData={validationData}
					/>
				)}
				{/* <hr className="my-8 dark:border-darkText" /> */}
			</div>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	loggedIn: state.auth.loggedIn,
})

export default connect(mapStateToProps)(ResetPasswordPage)
