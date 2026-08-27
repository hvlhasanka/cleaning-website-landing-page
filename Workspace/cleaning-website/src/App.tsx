import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Results from "./components/Results";
import About from "./components/About";
import Coverage from "./components/Coverage";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <About />
        <Coverage />
        <Pricing />
        <Reviews />
        <GetStarted />
      </main>
    </>
  );
}

export default App;
