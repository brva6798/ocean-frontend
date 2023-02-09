/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const defaultComponentMapping = {
	body: 'p',
	default: 'span',
	h1: 'h1',
	header: 'span',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	'h4-alt': 'h4',
	link: 'span',
	micro: 'span',
	pretitle: 'span',
	small: 'span',
	subtitle: 'span',
	big: 'span',
};

const defaultClassMapping = {
	body: 'text-base leading-tighter tracking-wider',
	'body-lg': 'text-lg leading-tighter tracking-wider',
	'body-heavy': 'text-base leading-snug tracking-wider font-bold',
	h1: 'text-3xl lg:text-5xl leading-8 lg:leading-[3.5rem] font-bold tracking-widest text-primary antialiased',
	header:
		'text-3xl lg:text-3xl leading-8 lg:leading-[3.5rem] font-bold tracking-widest antialiased',
	h2: 'text-2xl lg:text-4xl font-bold leading-[2.25rem] lg:leading-[3rem] antialiased',
	'h2-mobile': 'uppercase italic text-2xl font-bold antialiased',
	h3: 'text-xl font-semibold tracking-wider antialiased',
	h4: 'text-lg font-bold antialiased',
	'h4-alt': 'text-lg font-semibold tracking-wider',
	link: 'tracking-wider text-secondary underline underline-offset-2 hover:text-secondary-dark antialiased',
	'link-header': 'tracking-widest text-black hover:text-primary font-bold uppercase',
	'link-red': 'tracking-wider hover:text-primary',
	micro: 'text-xs font-medium tracking-wider antialiased',
	pretitle: 'uppercase text-xs font-bold antialiased',
	small: 'text-sm font-medium tracking-wide antialiased',
	big: 'text-4xl font-medium tracking-wide antialiased',
	subtitle:
		'text-base text-lg lg:text-xl font-semibold tracking-wide leading-tight md:leading-normal',
	'subtitle-mobile': 'text-lg font-medium tracking-wide antialiased',
};

const Typography = ({ children, variant, component, className, ...other }) => {
	if (!children) {
		return null;
	}

	let variantClasses = defaultClassMapping[variant] || '';

	const Component =
		component || defaultComponentMapping[(variant && variant.split('-')[0]) || 'default'];

	if (className) {
		variantClasses += ` ${className}`;
	}

	return (
		<Component className={variantClasses} {...other}>
			{children}
		</Component>
	);
};

Typography.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string,
		PropTypes.array,
		PropTypes.number,
	]),
	className: PropTypes.string,
	component: PropTypes.string,
	variant: PropTypes.oneOf(Object.keys(defaultClassMapping)),
};

export default Typography;
