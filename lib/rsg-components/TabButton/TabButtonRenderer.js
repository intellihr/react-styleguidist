function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

export var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    buttonTextTransform = _ref.buttonTextTransform;
	return {
		button: {
			padding: [[space[1], 0]],
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.light,
			background: 'transparent',
			textTransform: buttonTextTransform,
			transition: 'color 750ms ease-out',
			border: 'none',
			cursor: 'pointer',
			'&:hover, &:focus': {
				isolate: false,
				outline: 0,
				color: color.linkHover,
				transition: 'color 150ms ease-in'
			},
			'&:focus:not($isActive)': {
				isolate: false,
				outline: [[1, 'dotted', color.linkHover]]
			},
			'& + &': {
				isolate: false,
				marginLeft: space[1]
			}
		},
		isActive: {
			borderBottom: [[2, color.linkHover, 'solid']]
		}
	};
};

export function TabButtonRenderer(_ref2) {
	var classes = _ref2.classes,
	    name = _ref2.name,
	    className = _ref2.className,
	    onClick = _ref2.onClick,
	    active = _ref2.active,
	    children = _ref2.children;

	var classNames = cx(classes.button, className, _defineProperty({}, classes.isActive, active));

	return React.createElement(
		'button',
		{ type: 'button', name: name, className: classNames, onClick: onClick },
		children
	);
}

TabButtonRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	children: PropTypes.node
};

export default Styled(styles)(TabButtonRenderer);