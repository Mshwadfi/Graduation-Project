import AboutUs from "./AboutUs";
import ContactUs from "./Contact";
import Header from "./Header"
import Hero from "./Hero";
import Plans from "./Plans";
import Footer from "./Footer";


const Home  = () =>{

    return(
        <div>
            <Header />
            <Hero />
            <ContactUs />
            <AboutUs />
            <Plans />
            <Footer />
        </div>
    )
}

export default Home;