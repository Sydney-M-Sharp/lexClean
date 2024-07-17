import { Link } from "react-router-dom";
import "./homePage.css"

export const HomePage = () => {
    return (
        <div className="FullPage">
            <div className="TopOfPage">
                <img className="image1" src="src/assets/lexWDuster.jpg" alt="Cleaning" /> 
                <img className="image2" src="src/assets/LexClean2024-83.jpg" alt="Cleaning" /> 
                <img className="image3" src="src/assets/LexClean2024-63.jpg" alt="Cleaning" /> 
            </div>
            
            <div className="MiddleOfPage">
                <section className="aboutSection">
                    <div className="aboutTop">
                        <img className="circleImg" src="src/assets/MirrorHeart.jpg" alt="About" /> 
                        <h1 >About Us</h1>
                    </div>
                    <hr className="line"></hr>
                    <p className="aboutParagraph">
                        "At Lex Clean, We believe that a clean space can transform your life, bringing peace, clarity, and a sense of well-being. Our team is committed to delivering meticulous and personalized cleaning solutions tailored to your unique needs. We take pride in our attention to detail and our commitment to using eco-friendly products to ensure a safe and healthy environment for you and your loved ones."
                    </p>
                </section>

                <section className="quoteSection"> 
                    <h1 className="sectionTitle">Get A Quote</h1>
                    <hr className="line"></hr>
                    <p className="contactParagraph">
                        Getting a quote is as easy is answering a few questions! Follow the link below to get started.
                        <a className="clickHere" href="https://forms.gle/SmA2YHMxrUeEsAWy6" target="_blank" rel="noopener noreferrer">
                            Click Here
                        </a>
                    </p>

                    <h1 className="sectionTitle">Contact Lex</h1>
                    <hr className="line"></hr>
                    <p className="contactParagraph">
                        <ul>
                            email: lexcleanllc@gmail.com
                        </ul>
                        <ul>
                            phone number: xxx-xxx-xxxx
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
}
