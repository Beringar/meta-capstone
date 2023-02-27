import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Reservation from "./components/Reservation";
import NoMatch from "./components/NoMatch";
import { ChakraProvider } from "@chakra-ui/react";
import ReservationConfirmed from "./components/ReservationConfirmed";

function App() {
  return (
    <ChakraProvider>
      <div className="page-container">
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Home />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="order" element={<Home />} />
            <Route path="login" element={<Home />} />
            <Route
              path="reservation-confirmed"
              element={<ReservationConfirmed />}
            />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
