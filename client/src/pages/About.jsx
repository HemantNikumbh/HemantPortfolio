export const About = () =>{
    return(
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <h1>Why Choose Us?</h1>
                        <p>
                            Expeertise : Our team consists of experiences IT professionals who 
                            are passionate about staying up-to-date with the latest industry 
                            trends. 
                        </p>

                        <p>
                            Customization : We understand that every business is unique.
                            That's why create solutions that are tailored to your 
                            specific needs and goals.
                        </p>
                        <p>
                            Customer-Centric-Approach : We prioritize your satisfaction and
                            provide top-notch support to address your IT concerns.
                        </p>
                        <p>
                            Reliability:Count on us to be there when you need us.
                            committed to ensuring your IT enviroment is reliable and 
                            available 24/7
                        </p>
                        <div className="btn btn-group">
                            <a href="/Contact">
                            <button className="btn">connect now</button>
                            </a>

                            <a href="/Service">
                            <button className="btn secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>
                    {/*hero-image*/}
                    <div className="hero-image">
                        <img src="/image/About.png" alt="Home" width="400"height="500" />
                    </div>

                </div>
            </section>
        </main>
       
        </>
    )
}