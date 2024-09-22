export const getOrThrowIfNull = <T>(
	element: T | null,
	message = "element not found.",
): T => {
	if (element == null) {
		throw new Error(message);
	}
	return element;
};
