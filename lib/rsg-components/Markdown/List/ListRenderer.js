var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Styled from 'rsg-components/Styled';
import { styles as paraStyles } from 'rsg-components/Para';

var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily;
	return {
		list: _extends({}, paraStyles({ space: space, color: color, fontFamily: fontFamily }).para, {
			paddingLeft: space[3]
		}),
		ordered: {
			listStyleType: 'decimal'
		},
		li: {
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: 'inherit',
			listStyleType: 'inherit'
		}
	};
};

export function ListRenderer(_ref2) {
	var classes = _ref2.classes,
	    ordered = _ref2.ordered,
	    children = _ref2.children;

	var Tag = ordered ? 'ol' : 'ul';

	var classNames = cx(classes.list, ordered && classes.ordered);

	return React.createElement(
		Tag,
		{ className: classNames },
		Children.map(children, function (li) {
			return cloneElement(li, { className: classes.li });
		})
	);
}
ListRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	ordered: PropTypes.bool,
	children: PropTypes.node.isRequired
};
ListRenderer.defaultProps = {
	ordered: false
};

export default Styled(styles)(ListRenderer);