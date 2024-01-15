import { Routes, Route, Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./content/Main/Home";
import Anons from "./fake_data/Announcement"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <Outlet />
          </>
        }>
          <Route index element={<Home />} />
          <Route path="find-doctor" element={<Anons />}/>
          <Route path="apps" element={<Anons />}/>
          <Route path="testimonials" element={<Anons />}/>
          <Route path="about" element={<Anons />}/>
          <Route path="*" element={<Anons />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
