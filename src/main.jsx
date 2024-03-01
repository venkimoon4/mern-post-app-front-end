import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import PostProvider from './context/PostContext.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostProvider>
    <UserProvider>
    <App />
    </UserProvider>
    </PostProvider>
  </React.StrictMode>,
)
