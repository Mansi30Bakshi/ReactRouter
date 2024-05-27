import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contactus.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/github.jsx'
// import Github from './Components/Github/Github.jsx'


// const Router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },{
//         path:'About',
//         element:<About/>
//       },{
//         path:'Contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>}/>
      {/* <Route path='/github' element={<Github/>}/> */}
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router}/>
  </React.StrictMode>,
)
