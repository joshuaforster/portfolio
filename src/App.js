import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import PortfolioDetail from "./pages/PortfolioDetail";
import Layout from "./components/layout"
import BlogPage from "./pages/blog";
import BlogDetail from "./pages/blogDetail";
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> {/* New route for individual blog posts */}
          <Route path="/portfolio/:id" element={<PortfolioDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

