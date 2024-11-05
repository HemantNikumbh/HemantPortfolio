export const Home = () =>{
    return (
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We Are The World Best IT Employee</p>
                        <h1>Welcome To Hemant Nikumbh</h1>
                        <p>
                        I’m a passionate web developer with a strong focus on creating dynamic, responsive, and user-
                        friendly websites. With a deep understanding of both front-end and back-end technologies, I build
                        efficient and scalable solutions tailored to meet client needs. Always staying up-to-date with the
                        latest web trends, I aim to craft seamless digital experiences.

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
                        <img src="/image/Home.png" alt="Home" width="400"height="500" />
                    </div>

                </div>
            </section>
        </main>
        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>Register</p>
                </div>
                <div className="div1">
                    <h2>50+</h2>
                    <p>Register</p>
                </div>
                <div className="div1">
                    <h2>50+</h2>
                    <p>Register</p>
                </div>
                <div className="div1">
                    <h2>50+</h2>
                    <p>Register</p>
                </div>
            </div>
             
        </section>
        </>
    )
}