import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import App2 from './App2';
import Chatbox from './components/Chatbox';
import ProfilePage from './components/Profilepage';
import Explore from './components/Explore';
import Notifications from './components/Notification';
import Exploreorienation from './components/Exploreorienation';
import Profileorient from './components/Profileorient';
import ForgotPass from './components/ForgotPass';
import SplashScreen from './components/Splashscreen';
import LoginAnki from './components/LoginAnki';
import SignupAnki from './components/SignupAni';
import SearchProfile from './components/SearchProfile';

// import { Toaster } from './components/ui/sonner';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    // element: <LoginAnki/>,
  },
  {
    path: '/',
    element: <Login />,
    // element: <LoginAnki/>,
  },
  {
    path: "/signup",
    element: <Signup />,
    // element: <SignupAnki/>,
  },

  {
    path: "mainHome",
    element: <App2 />,
  },
  {
    path: "chatbox",
    element: <Chatbox />,
  },
  {
    path: "profile",
    element: <Profileorient/>,
  },
  {
    path: "explore",
    element: <Exploreorienation />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPass/>,
  },
  {
    path: "splashscreen",
    element: <SplashScreen/>,
  },
  {
    path: "searchProfile",
    element: <SearchProfile/>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
    // <Toaster/>
  );
}
