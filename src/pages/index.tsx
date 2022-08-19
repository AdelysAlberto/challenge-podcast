
import {
  Routes,
  Route,
} from "react-router-dom";
import '../styles/globals.scss';

import Home from "./Home";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  );
};

export default App;
