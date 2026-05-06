import './index.css'
import { motion } from "framer-motion";
const Section = ({ id, title, text, video })=> {
    const isWhy = id === "why";

    return(
    <div id={id} className={`section ${id === "retail" || id === "food" ? "reverse" : ""}`}>
         
      <motion.div
        className="text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>{title}</h2>
        <p>{text}</p>
          <button className="explore-btn"
          
            onClick={() => document.getElementById("events").scrollIntoView({ behavior: "smooth" })}
          >
            
  Explore More <span>→</span>
</button>
      </motion.div>

      <motion.video
        autoPlay
        loop
        muted
         className={`video ${isWhy ? "video-large" : "video-small"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <source src={video} type={video.includes(".webm") ? "video/webm" : "video/mp4"} />
      </motion.video>

    
    </div>
    )

}
export default Section