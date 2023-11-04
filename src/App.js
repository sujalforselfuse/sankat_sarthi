import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from './components/Layout/Layout';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';
import NoteState from './context/NoteState';
import Marker from './components/Maps/Marker';
function App() {
  return (
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

        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/marker" element={<Marker />}></Route>
        </Routes>

        <ScrollToTop />

      </div>
    </NoteState>
  );
}

export default App;
