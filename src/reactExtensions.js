const setFormElement = setter => {
	return event => setter(event.currentTarget.value);
};

export { setFormElement };
