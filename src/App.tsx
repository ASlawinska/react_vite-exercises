import {createBrowserRouter, RouterProvider} from 'react-router-dom'



import HomePage from './pages/HomePage'
import Layout from './Layout'
import Article, {loader as articleLoader} from './pages/Article'
import ArticleList from './pages/ArticleList'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';




const routes = [{
  path:'/',
  element: <Layout/>,
  errorElement: <NotFoundPage/>,
  children:[{
  path:'/',
  element: <HomePage/>
},
{
  path:'/articles',
  element: <ArticleList/>
},
{
  path:'/articles/:name',
  element: <Article/>,
  loader: articleLoader
},

{
  path:'/about',
  element: <About/>
},
{
  path:'/login',
  element: <LoginPage/>
},
{
  path:'/create-account',
  element: <CreateAccountPage/>
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
