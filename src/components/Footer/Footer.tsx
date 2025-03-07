import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsArrowUpShort } from 'react-icons/bs'

import { IconLabelButton } from 'common/IconLabelButton'
import { routeConstants } from 'navigation'
import { connect } from 'react-redux'
import { namesConfig } from 'configs'
import { ErrorBoundary } from 'modules/errors'

const Footer: React.FC = ({ company }: any) => {
	return (
		<ErrorBoundary>
			<div className="relative">
				<div className="bottom-0 grid w-full h-56 grid-flow-col grid-rows-1 gap-4 pt-8 bg-fullwhite dark:bg-darkComponentColor auto-cols-auto xl:px-32 md:px-24 shadow-Footer">
					<div className="mx-auto my-0">
						<Link
							to={routeConstants.about.route}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor"
						>
							<h1 className="font-semibold text-black xl:text-xl 2xl:text-2xl md:text-base dark:text-darkTextWhiteColor">
								{routeConstants.about.name}
							</h1>
						</Link>
						<Link
							to={routeConstants.about.route}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor"
						>
							<p className="text-black dark:text-darkText">
								{routeConstants.about.name}
							</p>
						</Link>
						<p className="text-black dark:text-darkText">
							Delivery and payment
						</p>
						<p className="text-black dark:text-darkText">Order now!</p>
					</div>
					<div className="mx-auto my-0">
						<h1 className="font-semibold text-black xl:text-xl 2xl:text-2xl md:text-base dark:text-darkTextWhiteColor">
							Partnership
						</h1>
						<p className="text-black dark:text-darkText">Collaboration</p>
						<p className="text-black dark:text-darkText">Brands</p>
						<p className="text-black dark:text-darkText">Vacancies</p>
					</div>
					<div className="mx-auto my-0">
						<h1 className="font-semibold text-black xl:text-xl 2xl:text-2xl md:text-base dark:text-darkTextWhiteColor">
							Our Services
						</h1>
						<p className="text-black dark:text-darkText">
							Terms and conditions
						</p>
						<p className="text-black dark:text-darkText">Conspiracy</p>
					</div>
					<div className="mx-auto my-0">
						<h1 className="font-semibold text-black xl:text-xl 2xl:text-2xl md:text-base dark:text-darkTextWhiteColor">
							Help
						</h1>
						<p className="text-black dark:text-darkText">Help & support</p>
						<Link
							to={routeConstants.contact.route}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor"
						>
							<p className="text-black dark:text-darkText">
								{routeConstants.contact.name}
							</p>
						</Link>
					</div>
					<div className="mx-auto my-0">
						<Link
							to={routeConstants.contact.route}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor"
						>
							<h1 className="font-semibold xl:text-xl 2xl:text-2xl md:text-base text-gradient dark:text-darkTextWhiteColor">
								{routeConstants.contact.name}
							</h1>
						</Link>
						<a
							href={`tel:${company.phone1 ?? namesConfig.company_phone}`}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor group"
						>
							<IconLabelButton
								className="flex items-center"
								icon={
									<BsFillTelephoneFill className="text-black dark:text-darkText group-hover:text-textColorOrange dark:group-hover:text-darkFirstColor" />
								}
								label={company.phone1 ?? namesConfig.company_phone}
								labelClassName="text-black dark:text-darkText px-2 dark:group-hover:text-darkTextWhiteColor"
							/>
						</a>
						<a
							href={`mailto:${company.email ?? namesConfig.company_email}`}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor group"
						>
							<IconLabelButton
								className="flex items-center"
								icon={
									<MdOutlineAlternateEmail className="text-black dark:text-darkText group-hover:text-textColorOrange dark:group-hover:text-darkFirstColor" />
								}
								label={company.email ?? namesConfig.company_email}
								labelClassName="text-black dark:text-darkText px-2 dark:group-hover:text-darkTextWhiteColor"
							/>
						</a>
						<a
							href={`https://${
								company.webAddress ?? namesConfig.company_webAddress
							}`}
							className="hover:text-textColorOrange dark:hover:text-darkFirstColor group"
						>
							<IconLabelButton
								className="flex items-center"
								icon={
									<AiOutlineGlobal className="text-black dark:text-darkText group-hover:text-textColorOrange dark:group-hover:text-darkFirstColor" />
								}
								label={company.webAddress ?? namesConfig.company_webAddress}
								labelClassName="text-black dark:text-darkText px-2 dark:group-hover:text-darkTextWhiteColor"
							/>
						</a>
					</div>
					<IconLabelButton
						className="absolute w-8 h-8 rounded dark:hover:opacity-80 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight bottom-8 right-8 dark:bg-gradient-to-r dark:from-darkFirstColor dark:to-darkFirstColor"
						icon={
							<BsArrowUpShort className="w-full h-full text-white hover:bg-textColorOrange dark:hover:bg-darkFirstColor hover:rounded" />
						}
						label=""
					/>
					<div className="absolute bottom-0 xl:w-[80%] md:w-[73%] col-start-1 col-end-6 text-center border-t-2 border-white dark:border-darkTextWhiteColor">
						<a href={`https://${namesConfig.creator_webAddress}`}>
							<IconLabelButton
								className="py-3 text-gray-400 cursor-default dark:text-darkText"
								label="Made by Sapcozgut"
							/>
						</a>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	company: state.company.data,
})
export default connect(mapStateToProps)(Footer)
