export const formatMonetaryValue = (value) => {
	return Intl.NumberFormat('en-US', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	}).format(value);
};
export const formatNumberComma = (value) => {
	return Intl.NumberFormat('en-US', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 0,
	}).format(value);
};
