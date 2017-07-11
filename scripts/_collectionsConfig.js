import sorter from './utils/_sorter'

const collectionsConfig = {
	Brand: {
		sortBy: sorter([
			'Tone and voice',
			'Purpose',
			'Mission',
			'Logo',
			'Brand assets'
		]),
		metadata: {
			name: 'BRAND',
			description: 'Info about the brand listed here...'
		}
	},
	Design: {
		sortBy: sorter([
			'Design principles',
			'Design process',
			'Typography',
			'Color',
			'Icons',
			'Imagery',
			'Layout',
			'Links',
			'Buttons',
			'Forms',
			'Navigation',
			'Animation',
			'Messages from Meetup',
			'Email templates'
		])
	},
	Content: {
		sortBy: sorter([
			'Tone and voice principles',
			'Content process',
			'Basics',
			'Capitalization',
			'Punctuation',
			'Time and date',
			'Spelling + glossary of terms',
			'Personal pronouns',
			'Calls to action',
			'Subject lines',
			'Notifications',
			'Social media',
			'Community voice guidelines'
		])
	},
	Components: {},
	Usability: {
		sortBy: sorter([
			'a11y',
			'i18n'
		])
	},
	Platforms: {
		sortBy: sorter([
			'Web',
			'Android',
			'iOS'
		])
	},
	Resources: {}
};

export default collectionsConfig;
