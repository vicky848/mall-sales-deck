
import './App.css';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Hero/>
       <Section
           id="why"
           title="Why This Property"
            text="Located in the heart of the Midwest, attracting over 40 million visitors annually, Mall of America is one of the most powerful retail and entertainment destinations in the world."
            video="/videos/why.mp4"
              />
  

  <Section
        id="retail"
        title="Retail"
        text="Home to 500+ global and emerging brands, offering unmatched visibility, high foot traffic, and a diverse customer base."
        video="/videos/retail.mp4"
        />

 <Section
  id="ent"
  title="Entertainment"
  text="More than shopping — featuring a world-class indoor theme park, attractions, and experiences that drive continuous footfall."
  video="/videos/ent.webm"
/>




<Section
  id="food"
  title="Dining & Lifestyle"
  text="A curated mix of restaurants and cafes that turn every visit into a complete lifestyle experience."
  video="/videos/food-court.mp4"
/>


<Section
  id="events"
  title="Events & Platform"
  text="From global brand activations to live concerts, Mall of America provides a stage for unforgettable large-scale experiences."
  video="/videos/event.mp4"
/>
    <CTA/>
    </div>
  );
}

export default App;
