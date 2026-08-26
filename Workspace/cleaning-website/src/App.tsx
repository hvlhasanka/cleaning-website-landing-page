import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Results from "./components/Results";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <About />
      </main>
    </>
  );
}

export default App;
