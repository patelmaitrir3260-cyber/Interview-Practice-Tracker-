import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardPage from './features/pages/DashboardPage'
import QuestionPage from './features/pages/QuestionPage'
import QuestionAddPage from './features/pages/QuestionAddPage'
import PracticePage from './features/pages/PracticePage'


const App = () => {

 const router= createBrowserRouter([
  {
    path:'/',
    element:<DashboardPage/>,
   
  },
  {
    path:"/questions",
    element:<QuestionPage/>
  },
  {
    path:"/questions/add",
    element:<QuestionAddPage/>
  },
  {
    path:'/practice',
    element:<PracticePage/>
  }

 ])
  return <RouterProvider router={router}/>
   
}

export default App