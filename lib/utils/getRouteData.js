import isFinite from 'lodash/isFinite';
import filterComponentExamples from './filterComponentExamples';
import filterComponentsInSectionsByExactName from './filterComponentsInSectionsByExactName';
import filterSectionExamples from './filterSectionExamples';
import findSection from './findSection';
import getInfoFromHash from './getInfoFromHash';
import { DisplayModes } from '../consts';

/**
 * Return sections / components / examples to show on a screen according to a current route.
 *
 * Default: show all sections and components.
 * #!/Button: show only Button section or Button component
 * #!/Button/1: show only the second example (index 1) of Button component
 *
 * @param {object} sections
 * @param {string} hash
 * @returns {object}
 */
export default function getRouteData(sections, hash) {
	// Parse URL hash to check if the components list must be filtered
	var _getInfoFromHash = getInfoFromHash(hash),
	    targetName = _getInfoFromHash.targetName,
	    targetIndex = _getInfoFromHash.targetIndex;

	var displayMode = DisplayModes.all;

	// Filter the requested component if required
	if (targetName) {
		var filteredComponents = filterComponentsInSectionsByExactName(sections, targetName);
		if (filteredComponents.length) {
			sections = [{ components: filteredComponents }];
			displayMode = DisplayModes.component;
		} else {
			var section = findSection(sections, targetName);
			sections = section ? [section] : [];
			displayMode = DisplayModes.section;
		}

		// If a single component or section is filtered and a fenced block index is specified hide all other examples
		if (isFinite(targetIndex)) {
			if (filteredComponents.length === 1) {
				sections = [{ components: [filterComponentExamples(filteredComponents[0], targetIndex)] }];
				displayMode = DisplayModes.example;
			} else if (sections.length === 1) {
				sections = [filterSectionExamples(sections[0], targetIndex)];
				displayMode = DisplayModes.example;
			}
		}
	}

	return { sections: sections, displayMode: displayMode };
}