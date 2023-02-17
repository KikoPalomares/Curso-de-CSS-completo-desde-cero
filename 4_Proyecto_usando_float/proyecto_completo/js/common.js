import themeColors from './colors.js';

export const localStorageRecovery = localStorageName => {
	const localStorageValue = localStorage.getItem(localStorageName);
	return localStorageValue;
};

export const localStorageSet = (localStorageName, localStorageValue) => {
	localStorage.setItem(localStorageName, localStorageValue);
};

export const themeRecovery = localStorageValue => {
	const root = document.querySelector(':root');
	// no borrar es ejemplo de get.
	// const rootStyles = getComputedStyle(root);
	// const primaryColor = rootStyles.getPropertyValue('--primary-color');
	// console.log(primaryColor);

	const newColors = themeColors[localStorageValue];

	root.style.setProperty('--primary-color', newColors['primary-color']);
	root.style.setProperty(
		'--primary-color-dark',
		newColors['primary-color-dark']
	);

	root.style.setProperty('--secondary-color', newColors['secondary-color']);
	root.style.setProperty(
		'--secondary-color-dark',
		newColors['secondary-color-dark']
	);

	root.style.setProperty('--gray-color', newColors['gray-color']);
	root.style.setProperty('--gray-color-dark', newColors['gray-color-dark']);
};
