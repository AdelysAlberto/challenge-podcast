
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import '../../styles/globals.scss';

import Home from "../../pages/Home";
import Podcast from "../../pages/Podcast";
import Episode from "../../pages/Episodes";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Outlet />}>
        <Route index element={<Podcast />} />
        <Route path="episode/:param" element={<Episode />} />
      </Route>
    </Routes>

  );
};

export default App;
