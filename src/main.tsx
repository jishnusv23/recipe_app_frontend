import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { store } from './redux/index.tsx';
const clientId = import.meta.env.VITE_CLIENT_ID;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>

  <GoogleOAuthProvider clientId={clientId}>

    <App />
  </GoogleOAuthProvider>
    </Provider>

  </StrictMode>
);
