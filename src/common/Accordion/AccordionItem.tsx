import { useState } from 'react'

import './Accordion.scss'

export const AccordionItem = ({ title, children }: any) => {
	const [opened, setOpened] = useState(false)
	return (
		<li {...{ className: 'accordion-list__item' }}>
			<div
				{...{
					className: `accordion-item, ${opened && 'accordion-item--opened'}`,
					onClick: () => {
						setOpened(!opened)
					},
				}}
			>
				<div {...{ className: 'accordion-item__line' }}>
					<h3 {...{ className: 'accordion-item__title' }}>{title}</h3>
					<span {...{ className: 'accordion-item__icon' }} />
				</div>
				<div {...{ className: 'accordion-item__inner' }}>
					<div {...{ className: 'accordion-item__content' }}>
						<p {...{ className: 'accordion-item__paragraph' }}>{children}</p>
					</div>
				</div>
			</div>
		</li>
	)
}
