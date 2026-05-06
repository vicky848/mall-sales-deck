import './index.css'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
        <motion.div
        className="overlay"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        >
          <h1>
             More Than a Mall. <br />
         <span>A Global Retail & Entertainment Empire.</span>
        </h1>
         <p>
  The #1 destination for brands, experiences, and millions of visitors.
</p>


        </motion.div>
     
    </div>
  );
};

export default Hero;