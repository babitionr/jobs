import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Profile, Addjob, Alljobs, SharedLayout, Stats} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <SharedLayout />
        </ProtectedRoute>
        }>
          <Route index element={<Stats />} />
          <Route path="all-jobs" index element={<Alljobs />} />
          <Route path="add-job" index element={<Addjob />} />
          <Route path="profile" index element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />       
        <Route path="/register" element={<Register />} />       
        <Route path="*" element={<Error />} />       
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
