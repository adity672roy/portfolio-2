import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonial";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const api = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const response = await api.json();
        setData(response.user);
        console.log(response.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero data={data.about} />
      <About data={data} />
      <Skills data={data.skills} />
      <Portfolio data={data.projects}/>
      <Services data={data.services} />
      <Testimonials data={data.testimonials} />
      <Contact data={data}/>
      <Footer />
    </div>
  );
};

export default App;
