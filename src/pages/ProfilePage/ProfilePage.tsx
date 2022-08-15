import React from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { Button } from 'antd'
import { getCurrentUserInfo } from 'sapredux/selectors'
import { Image } from 'common/Image'
import { ErrorBoundary, ErrorIndicator } from 'modules/errors'
import { useTranslation } from 'react-i18next'

const ProfilePage: React.FC = ({ current_user }: any) => {
	const { t } = useTranslation()
	return !R.isEmpty(current_user) ? (
		<ErrorBoundary>
			<div className="grid grid-cols-2 p-4 gap-8 text-center grid-rows-[1fr_max-content_max-content_max-content_max-content_max-content]">
				<div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-[1fr_max-content_max-content_auto]">
					<Image
						className="object-cover m-auto avatar"
						src={current_user.image}
						alt={current_user.username}
						imageType="avatar"
					/>
					<span className="text-center text-black dark:text-darkTextWhiteColor">
						{current_user.name}
					</span>
					<small className="text-center text-black dark:text-darkTextWhiteColor">
						Hasaba alnan senesi: {current_user.createdDate}
					</small>
					{/* <Button
						type="ghost"
						shape="round"
						className="text-black dark:text-darkTextWhiteColor dark:hover:text-darkFirstColor dark:hover:border-darkFirstColor"
					>
						Change password
					</Button> */}
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.username')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.username}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.email')}
					</b>
					<p className="text-gray-400 dark:text-darkText min-phone:text-[10px]">
						{current_user.email ?? 'Email not registered'}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">El telefony</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.mobilePhoneNumber ?? 'Phone number not specified'}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.address')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.address ?? 'Address not specified'}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.zip')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.zipCode ?? 'Zip code not registered'}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Doly ady</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.name ?? ''}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.phone_number')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.homePhoneNumber ?? ''}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_phone_number_1')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.workPhoneNumber ?? ''}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.web_address')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.webAddress ?? ''}
					</p>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_phone_number_2')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.workFaxNumber ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.patronomic')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.patronomic ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.gender')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.gender ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{`${t('common.birth_date')} (yyyy-mm-dd)`}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.birthDate ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.nationality')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.nationality ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.passport_no')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.passportNo ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.passport_issue_place')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.passportIssuePlace ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.place_of_residence')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.residency ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.place_of_registration')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.registationPlace ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_name')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.suretyName ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_place_of_residence')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.suretyPlaceOfResidency ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_passport_number')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.suretyPassportNumber ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.buyers_surety_relationship')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.buyersSuretyRelationship ?? ''}
					</p>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_phone_number_1')}
					</b>
					<p className="text-gray-400 dark:text-darkText">
						{current_user.workPhoneNumber ?? ''}
					</p>
				</div>
			</div>
		</ErrorBoundary>
	) : (
		<ErrorIndicator />
	)
}

const mapStateToProps = (state: any) => ({
	current_user: getCurrentUserInfo(state.auth),
})

export default connect(mapStateToProps)(ProfilePage)
