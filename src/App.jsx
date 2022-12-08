import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.page";
import PageFavorites from "./pages/Favorites.page";
import PageDetail from "./pages/Detail.page";
import Header from "./componentes/layout/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<PageFavorites />} />
        <Route path="detail/:name/:id" element={<PageDetail />} />
      </Routes>
    </div>
  );
}

export default App;
