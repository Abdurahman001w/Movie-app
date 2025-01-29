import { Route, Routes } from "react-router";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/components/NotFound";
import { Movies } from "./pages/Movies";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/:id" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
