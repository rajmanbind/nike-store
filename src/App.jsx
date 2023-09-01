import "./App.css";
import {
  Hero,
  Stories,
  FlexContent,
  Sales,
  Footer,
  Navbar,
  Cart,
} from "./components/index";
import {
  heroapi,
  popularsales,
  topratesales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";
function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-[130px] relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists="true" />
        <FlexContent endpoint={highlight} ifExists="true" />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
