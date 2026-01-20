import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import News from "./components/News";
import Footer from "./components/Footer";
import AppLayout from "./layout/AppLayout";
import Headlines from "./components/Headlines";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState(null);
  return (
    <AppLayout>
      <Navbar className="sticky-top z-3 " onSearch={setSearch} />
      <Category className="py-5 sticky-top z-1" />

      <main>
        <News search={search} />
      </main>
      <Footer />
    </AppLayout>
  );
}

export default App;
