import "./App.scss";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from "./context/appContext";
import Footer from "./components/footer";
import About from "./pages/about/Index";
import Guide from "./pages/guide";
import Blog from "./pages/blog";
import Availability from "./pages/Availability";
// import BookContext, { bookContext } from "./context/bookContext";
import { useContext, useState } from "react";

function App() {



  // const {book,setBook}=useContext(bookContext)
  return (
    <AppContext>
      
      <div className="app">
      
        <Router>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/guides" element={<Guide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/availability" element={<Availability />} />
            {/* <Route path="/book" element={<Book />} /> */}
          </Routes>
         
          <Footer />
        </Router>
      </div>
      
    </AppContext>
  );
}

export default App;


