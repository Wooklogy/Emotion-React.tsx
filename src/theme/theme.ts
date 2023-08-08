import { extendTheme } from '@mui/joy';

export const globalTheme = extendTheme({

  components: {
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});
