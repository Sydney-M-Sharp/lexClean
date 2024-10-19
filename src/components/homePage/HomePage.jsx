import "./homePage.css"

export const HomePage = () => {
    return (
        <div className="FullPage">
            <div className="TopOfPage">
                <img className="image1" src="../../assets/lexWDuster.jpg" alt="Cleaning" />
                <img className="image2" src="../../assets/LexClean2024-83.jpg" alt="Cleaning" />
                <img className="image3" src="../../assets/LexClean2024-63.jpg" alt="Cleaning" />
            </div>

            <div className="MiddleOfPage">
                <section className="aboutSection">
                    <div className="aboutTop">
                        <img className="circleImg" src="src/assets/lexiCleaning.png" alt="About" />
                        <h1>About Us</h1>
                    </div>
                    <hr className="line"></hr>
                    <p className="aboutParagraph">
                        Hi there! I’m Lexi, a proud member of the LGBTQ+ community and a dedicated house cleaner with a passion for creating safe, welcoming environments. My approach is trauma-informed, recognizing the importance of comfort and respect in every space I enter.
                        With years of professional cleaning experience, I understand that a clean home can be a vital part of healing and well-being. I strive to provide not just a tidy space, but a non-judgemental atmosphere where you can truly relax. Whether you’re looking for a deep clean, regular upkeep, or support during a transition, I tailor my services to meet your unique needs.
                        I’m here to listen to your preferences and ensure you feel comfortable throughout the process. Let’s work together to create a home that feels safe, clean, and welcoming.
                    </p>
                </section>

                <section className="quoteSection">
                    <h1>Get A Quote</h1>
                    <hr className="line"></hr>
                    <p className="contactParagraph">Quote form goes here</p>

                    <h1>Contact Lex</h1>
                    <hr className="line"></hr>
                    <p className="contactParagraph">
                        <ul>
                            email: lexcleanllc@gmail.com
                        </ul>
                        <ul>
                            phone number: 615-398-9776
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
}
