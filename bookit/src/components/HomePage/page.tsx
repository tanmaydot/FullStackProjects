import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Home from "@/components/home/page";
import Hotels from "@/components/Hotels/page";
import About from "@/components/About/page";


function HomePage({ currentUser, hotelList }: any ) {
    return (
        <>
        <div>            
            <div className="home">
                <Home />
            </div>
            <div className="header">
                <Header currentUser={currentUser} />
            </div> 
            <div className="hotels">
                <Hotels hotelList={hotelList} />
            </div>
            <div className="About">
                <About />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
        </>
    )
}

export default HomePage
