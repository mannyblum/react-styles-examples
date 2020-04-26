import { createMuiTheme } from '@material-ui/core/styles';
import { computeColors } from './helpers';

let palette = { primary: {}, secondary: {} }

export function setThemeColors(colors) {

    const primaryPalette = computeColors(colors.primary);
    const secondaryPalette = computeColors(colors.secondary);

    palette.primary = Object.assign({}, ...primaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    palette.secondary = Object.assign({}, ...secondaryPalette.map((color) => {
        return { [color.name]: color };
    }));

    return palette;
}

export function createTheme(colors) {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: colors.primary[500].hex
            },
            secondary: {
                main: colors.secondary[500].hex
            },
        },
    });

    return theme;
}