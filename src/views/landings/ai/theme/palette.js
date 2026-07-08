// @project
import { extendPaletteWithChannels } from '@/utils/colorUtils';

/***************************  DEFAULT / AI THEME - PALETTE  ***************************/

export function buildPalette() {
  const textPrimary = '#1D1D22';
  const textSecondary = '#55556D';
  const divider = '#D1D1DB';
  const background = '#FFF';

  const lightPalette = {
    primary: {
      lighter: '#E5E5E9',
      light: '#A9A9BC',
      main: '#1D1D22',
      dark: '#121217',
      darker: '#000000'
    },
    secondary: {
      lighter: '#F1F4F9',
      light: '#D1D1DB',
      main: '#55556D',
      dark: '#3F3F50',
      darker: '#121217'
    },
    grey: {
      50: '#F9F9FC', // AI/neutral/98 - surface / surface bright
      100: '#F1F4F9', // AI/neutral/96 - surface container low
      200: '#EBEEF3', // AI/neutral/94 - surface container
      300: '#E6E8EE', // AI/neutral/92 - surface container high
      400: '#E2E2E5', // AI/neutral/90 - surface container highest
      500: '#D7DADF', // AI/neutral/87 - surface dim
      600: divider, // AI/neutral variant/80 - outline variant
      700: '#72787E', // AI/neutral variant/50 - outline
      800: textSecondary, // AI/neutral variant/30 - on surface variant
      900: textPrimary // AI/neutral/10 - on surface
    },
    text: {
      primary: textPrimary, // AI/neutral/10 - on surface
      secondary: textSecondary // AI/neutral variant/30 - on surface variant
    },
    divider,
    background: {
      default: background
    }
  };

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPalette);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'light',
      ...extendedCommon,
      ...extendedLight
    }
  };
}
