/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/routing';
import ThemeProvider from 'src/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    //Making Changes
  
      <ThemeProvider>
        <ToastContainer />
        <Router />
      </ThemeProvider>
  );
}
