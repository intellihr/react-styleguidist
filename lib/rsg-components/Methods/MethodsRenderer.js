var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import Argument from 'rsg-components/Argument';
import Arguments from 'rsg-components/Arguments';
import Name from 'rsg-components/Name';
import JsDoc from 'rsg-components/JsDoc';
import Table from 'rsg-components/Table';

var getRowKey = function getRowKey(row) {
	return row.name;
};

export var columns = [{
	caption: 'Method name',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref) {
		var name = _ref.name,
		    _ref$tags = _ref.tags,
		    tags = _ref$tags === undefined ? {} : _ref$tags;
		return React.createElement(
			Name,
			{ deprecated: !!tags.deprecated },
			name + '()'
		);
	}
}, {
	caption: 'Parameters',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref2) {
		var _ref2$params = _ref2.params,
		    params = _ref2$params === undefined ? [] : _ref2$params;
		return React.createElement(Arguments, { args: params });
	}
}, {
	caption: 'Description',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref3) {
		var description = _ref3.description,
		    returns = _ref3.returns,
		    _ref3$tags = _ref3.tags,
		    tags = _ref3$tags === undefined ? {} : _ref3$tags;
		return React.createElement(
			'div',
			null,
			description && React.createElement(Markdown, { text: description }),
			returns && React.createElement(Argument, _extends({ block: true, returns: true }, returns)),
			React.createElement(JsDoc, tags)
		);
	}
}];

export default function MethodsRenderer(_ref4) {
	var methods = _ref4.methods;

	return React.createElement(Table, { columns: columns, rows: methods, getRowKey: getRowKey });
}

MethodsRenderer.propTypes = {
	methods: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
		returns: PropTypes.object,
		params: PropTypes.array,
		tags: PropTypes.object
	})).isRequired
};