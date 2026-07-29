import { createTheme } from '@mui/material/styles';

// Builds an MUI theme from the shared styled-components design tokens so that
// MUI components (Chips, Cards, Buttons, Timeline) stay consistent with the
// rest of the app in both light and dark mode.
export default function buildMuiTheme(mode, t) {
  return createTheme({
    palette: {
      mode,
      primary: { main: t.color_accent },
      background: { default: t.color_background, paper: t.color_surface },
      text: { primary: t.color_primary, secondary: t.color_muted },
      divider: t.color_border
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: t.font_family
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 600 }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius: 10 }
        }
      }
    }
  });
}
