import {
	localStorageRecovery,
	localStorageSet,
	themeRecovery,
} from './common.js';

export const localStorageThemeVerification = (
	localStorageName,
	localStorageValue
) => {
	let recLocalStorageValue = localStorageRecovery(localStorageName);
	if (!recLocalStorageValue) {
		// No existe, se procede a crear
		localStorageSet(localStorageName, localStorageValue);
		recLocalStorageValue = localStorageValue;
	}
	// console.log(recLocalStorageValue);
	themeRecovery(recLocalStorageValue);
};
