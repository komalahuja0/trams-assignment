import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Offers from "./components/Offers";
import Story from "./components/Story";
import Testimonal from "./components/Testimonal";

function App(){
  return(
<div className = "font-body text-ink bg-cloud min-h-screen">
  <Navbar/>
  <main>
    <Hero/>
    <Story/>
    <Offers/>
    <Testimonal/>
  </main>
  <Newsletter/>
</div>
  );
}
export default App;