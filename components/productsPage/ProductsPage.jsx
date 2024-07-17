import "./procuctsPage.css"

export const ProductsPage = () => {
    return (
        <div className="FullPage">
            <div className="TopOfPage">
                <img className="productImage" src="src/assets/products.jpg" alt="Cleaning" /> 
                
            </div>
            
            <div className="MiddleOfPage">
                <section className="aboutSection">
                    <div className="aboutTop">
                        <img className="circleImg" src="src/assets/lexiCleaning.png" alt="About" /> 
                        <h1>About Us</h1>
                    </div>
                    <hr className="line"></hr>
                    <p className="aboutParagraph">
                        Here is a box that holds all of the info about Lex Cleaning. I need to see how much can fit in Here.
                        blah blah Here is a box that holds all of the info about Lex Cleaning.
                        Here is a box that holds all of the info about Lex Cleaning.
                    </p>
                </section>

                <section className="quoteSection"> 
                    <h1>Get A Quote</h1>
                    <hr className="line"></hr>
                    <p className="contactParagraph">Quote link info</p>

                    <h1>Contact Lex</h1>
                    <hr className="line"></hr>
                    <p className="contactParagraph">
                        <ul>
                            email: Email@gmail.com
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
