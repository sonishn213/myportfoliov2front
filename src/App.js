import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Footer from "./components/Navigation/Footer/Footer";
function App() {
  return (
    <main className="bg-neutral-900 relative">
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
