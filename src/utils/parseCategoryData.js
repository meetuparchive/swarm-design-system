const getSubtopicLinks = (category) => {
	const subtopicLinks = category.reduce((acc, curr) => {
		acc[curr.node.fields.subDir] = acc[curr.node.fields.subDir] || [];
		acc[curr.node.fields.subDir].push(curr);

		return acc;
	}, Object.create(null));

	return subtopicLinks;
};

const parseCategoryData = (categoryData) => {
	let newObj;
	categoryData.reduce((acc, curr) => {

		categoryData.reduce((acc, curr) => {
			acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
			acc[curr.node.fields.topLevelDir].push(curr);

			newObj = acc;
			return newObj;
		}, Object.create(null));

		Object.keys(newObj).forEach((category, index) => {
			newObj[category] = getSubtopicLinks(newObj[category]);
		});

		return newObj;
	}, Object.create(null));

	return newObj;
};

export default parseCategoryData;
