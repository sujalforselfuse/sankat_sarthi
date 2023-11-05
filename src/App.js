import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from './components/Layout/Layout';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';
import NoteState from './context/NoteState';
import Marker from './Pages/Maps/Marker';
import Hospitals_mark from './Pages/Maps/Hospitals';
import Food_mark from './Pages/Maps/Food';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Work from './Pages/HowWorks/Work';
import Report from './Pages/Report/Report';
function App() {
  return (
    <>
    <NoteState>
      <div>

        <ToastContainer
          position="top-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/shelter" element={<Marker />}></Route>
          <Route path="/hospital" element={<Hospitals_mark />}></Route>
          <Route path="/food" element={<Food_mark />}></Route>
          <Route path="/works" element={<Work />}></Route>
          <Route path="/report" element={<Report />}></Route>
        </Routes>

        <Footer />

        <ScrollToTop />

      </div>
    </NoteState>
    </>
  );
}

export default App;
