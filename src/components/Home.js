import image from '../images/drug2.png';


function Home() {
    return (
        <div className="hero-image">
            <h1>WELCOME TO MY-DAWA STORE</h1>
            <h3>Your platform for affordable medication</h3>
            <img src={image} alt=""/><img src={image} alt=""/> <img src={image}  alt=""/>
            {/* <h1>Click on the Medications and Doctors links and refresh to view other pages</h1> */}


        </div>
    )
}

export default Home;