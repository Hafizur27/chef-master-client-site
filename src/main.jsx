import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
