
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import '../../styles/globals.scss';

import Home from "../../pages/Home";
import Podcast from "../../pages/Podcast";
import Episode from "../../pages/Podcast/components/Episodes";
import DetailEpisode from "../../pages/Podcast/components/DetailsEpisodes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/" element={<Podcast />}  >
          <Route path=":id">
            <Route element={<Episode />} index />
            <Route path="episode/:id" element={<DetailEpisode />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
