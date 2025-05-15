// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import './styles/DatFromInfo.css';
import './styles/button.css';
import './styles/index.css';
import App from './App.tsx';
import { AppProvider } from './contexts/AppContext.tsx';
import { MovieContextProvider } from './contexts/MovieContext.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
	<BrowserRouter>
		<AppProvider>
			<MovieContextProvider>
				<App />
			</MovieContextProvider>
		</AppProvider>
	</BrowserRouter>
  // </StrictMode>,
)

/*
tinh nang Dat
- fix bug

*/
