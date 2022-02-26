<SuiSelectHook
configDict={configDict}
pageData={pageData}
setPageData={setPageData}
/>

<SuiToggleHook
configDict={configDict}
pageData={pageData}
setPageData={setPageData}
/>




const selectOptionsCreateFromListGenerate = (l) => {
	return _.map(l.split(","), (i) => {
		return { label: i, value: i };
	});
};
export const SuiSelectHook = ({ configDict, pageData, setPageData }) => {
	const onChange = (value) => {
		const elementID = configDict["id"];
		var newDict = {};
		newDict[elementID] = value;
		const updatedPageData = { ...pageData, ...newDict };
		setPageData(updatedPageData);
	};

	const defaultValue = [];
	const options = selectOptionsCreateFromListGenerate(configDict["value"]);
	return (
		<SuiSelectElement
			text={configDict["text"] || ""}
			description={configDict["description"] || ""}
			defaultValue={defaultValue}
			options={options}
			onChange={onChange}
		/>
	);
};
