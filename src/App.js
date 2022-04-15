import './App.css';
import {Route, Routes} from 'react-router-dom';

import Layout from './Components/Layout';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { AboutPage, HomePage, SignInPage, PostPage, PostsPage, NotFoundPage } from './Pages/index';

function App() {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout user={user}/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/posts/page:id' element={<PostsPage/>}/>
                        <Route path='/posts/:id' element={<PostPage/>}/>
                    </Route>
                    <Route path='/login' element={<SignInPage user={user}/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
