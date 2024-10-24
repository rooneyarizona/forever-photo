
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PhotoItem from './components/photo/PhotoItem';
import Layout from './components/ui/Layout';
import Hamburger from './components/ui/Hamburger';
import Timeline from './components/timeline/Timeline';



function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<PhotoItem />} />
    <Route path="photoItem" element={<PhotoItem />} />
    <Route path="hamburger" element={<Hamburger />}/>
    <Route path="timeline" element={<Timeline />}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
