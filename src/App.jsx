
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Posts from "./components/posts";
import Home from "./routes/home";
import Users from "./components/Users";
import Header from "./components/Header";
import Comments from "./components/Comments";

function App() {
    

    return (
        <>
            <div className="app">
            
                <Header/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/users' element={<Users />} />
                    <Route path='/posts' element={<Posts/>} />
                    <Route path='/comments' element={<Comments/>} />
                </Routes>
            </div>
        </>
    )

}

export default App;