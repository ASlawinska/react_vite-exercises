import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import Layout from './Layout'
import {Article} from './pages/Article'
import ArticleList from './pages/ArticleList'
import About from './pages/About'



const routes = [{
  path:'/',
  element: <Layout/>,
  children:[{
  path:'/',
  element: <HomePage/>
},
{
  path:'/articlelist',
  element: <ArticleList/>
},
{
  path:'/articlelist/:name',
  element: <Article/>
},
{
  path:'/about',
  element: <About/>
},
],
}]

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
    <RouterProvider router={router}/>

    </>
    
  )
}

export default App
