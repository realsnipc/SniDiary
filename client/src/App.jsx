import './App.css';
import { UserContextProvider } from './UserContext';
import Header from './components/Header';
import Login from './components/Login';
import Post from './components/Post';
import { Outlet, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import IndexPage from './pages/IndexPage/IndexPage';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';
import STT from '../src/script/STT'
import Footer from './components/Footer';


function App() {

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={
            <main className='animated tdFadeIn'>
              <STT/>
              <Header />
              <Outlet />
              <Footer/>
            </main>} >

            <Route path='/' element={
              <IndexPage />}>
            </Route>

            <Route path='/login' element={
              <Login />}>
            </Route>

            <Route path='/create' element={
              <CreatePost />}>
            </Route>

            <Route path='/post/:id' element={
              <PostPage/>}>
            </Route>

            <Route path='/edit/:id' element={
              <EditPage/>}>
            </Route>





          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
