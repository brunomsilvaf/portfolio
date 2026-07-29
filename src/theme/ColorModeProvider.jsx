import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';
import buildMuiTheme from './muiTheme';

const STORAGE_KEY = 'color-mode';

const ColorModeContext = createContext({ mode: 'light', toggle: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

function getInitialMode() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // localStorage may be unavailable (private mode) — fall back to system.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore persistence errors.
    }
  }, [mode]);

  const styledTheme = mode === 'dark' ? darkTheme : lightTheme;
  const muiTheme = useMemo(
    () => buildMuiTheme(mode, styledTheme),
    [mode, styledTheme]
  );

  const contextValue = useMemo(
    () => ({
      mode,
      toggle: () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={styledTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <GlobalStyles />
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ColorModeContext.Provider>
  );
}

ColorModeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
