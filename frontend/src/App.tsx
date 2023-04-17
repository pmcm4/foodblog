import styles from './App.module.scss';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';
import { Search } from './components/search/search';
import { SingleBlog } from './components/single-blog/single-blog';
import { ListBlogSearch } from './components/list-blog-search/list-blog-search';
import { ProfilePage } from './components/profile-page/profile-page';
import { Home } from './components/home/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Register } from './components/register/register';


function App() {
    return (    
      <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
        <Routes>
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/single-blog" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>    
    );
  }

export default App;
