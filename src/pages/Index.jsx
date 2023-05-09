import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
// components
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";


const Index = () => {
  return (
    <div>
        <Helmet>
            <title>Home | Coffe Tea malang</title>
        </Helmet>
      <Navbar/>
      <HeroSection/>
    </div>
  );
};

export default Index;