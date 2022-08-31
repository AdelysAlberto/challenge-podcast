
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
import { ReactQueryDevtools } from 'react-query/devtools'

//react query
import { QueryClient, QueryClientProvider } from 'react-query';
import configEnv from '../../utilities/config.utility';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: configEnv.cache_time, // 24 hours
    }
  }
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
