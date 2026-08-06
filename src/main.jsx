import { StrictMode } from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import store from "./redux/store";
import router from "./Router";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
