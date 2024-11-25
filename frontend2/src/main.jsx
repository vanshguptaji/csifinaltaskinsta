import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import { Toaster } from './components/ui/sonner'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import SplashScreen from './components/SplashScreen/SplashScreen'
import ForgotPass from './components/ForgotPassword/ForgotPass'
// import Profile from './components/Profilepage'
import ProfilePage from './components/Profilepage'
import Settings from './components/Settings'
// import persistStore from 'redux-persist/es/persistStore'

let persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        {/* <Settings/> */}
        {/* <ProfilePage /> */}
        {/* <ForgotPass/> */}
        {/* <SplashScreen/> */}
        <Toaster />
        {/* <App2 /> */}
      </PersistGate>
    </Provider>
  </StrictMode>,
)
