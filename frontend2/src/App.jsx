import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import App2 from './App2';
import Chatbox from './components/Chatbox';
// import { Toaster } from './components/ui/sonner';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "mainHome",
    element: <App2 />,
  },
  {
    path: "chatbox",
    element: <Chatbox />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
    // <Toaster/>
  );
}
