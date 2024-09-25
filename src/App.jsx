import { useEffect } from "react";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
  <div>
    <Navbar/>
    <Hero/>
    <Footer/>
  </div>
  )
}