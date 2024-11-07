import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PhotoItem from "./client/components/photo/PhotoItem"
import Layout from "./client/components/ui/Layout";
import Hamburger from "./client/components/ui/Hamburger"
import Timeline from "./client/components/timeline/Timeline";
import RegisterForm from "./client/components/register/RegisterForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhotoItem />} />
          <Route path="photoItem" element={<PhotoItem />} />
          <Route path="hamburger" element={<Hamburger />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="register" element={<RegisterForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
