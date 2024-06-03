// imports 
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Profile from './pages/ProfilePage.jsx';
import About from './pages/AboutPage.jsx';
import Projects from './pages/ProjectsPage.jsx';
import Contact from './pages/ContactPage.jsx';

import './index.css'

import "@fontsource/roboto";

// define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
