import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navigation/Navbar/Navbar";
function App() {
  return (
    <main className="bg-neutral-900 relative">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
