import { localStorageThemeVerification } from "./localStorageTheme.js";
import { addButtonEvents } from "./change-colors-theme.js";

const buttons = document.getElementsByTagName("button");

localStorageThemeVerification("theme", "color_theme_01");

addButtonEvents(buttons);
