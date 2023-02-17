import { localStorageSet, themeRecovery } from './common.js';

const buttonPressed = e => {
	const isButton = e.target.nodeName === 'BUTTON';
	if (isButton) {
		const buttonClicked = e.target.id;
		localStorageSet('theme', buttonClicked);
		console.log(`Change theme to: ${buttonClicked} `);
		switch (buttonClicked) {
			case 'color_theme_01':
				themeRecovery(buttonClicked);
				break;
			case 'color_theme_02':
				themeRecovery(buttonClicked);
				break;
			case 'color_theme_03':
				themeRecovery(buttonClicked);
				break;
			default:
				break;
		}
	}
	if (!isButton) {
		console.log('no es boton');
	}
};

export const addButtonEvents = buttons => {
	for (const button of buttons) {
		button.addEventListener('click', buttonPressed);
	}
};
