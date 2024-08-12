import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

/**
 * App.jsx
 */
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
    </main>
  );
};

export default App;
