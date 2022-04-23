import './Accordion.scss'

export const AccordionWrapper = ({ children }: any) => {
	return (
		<div {...{ className: 'wrapper' }}>
			<ul {...{ className: 'accordion-list' }}>{children}</ul>
		</div>
	)
}
