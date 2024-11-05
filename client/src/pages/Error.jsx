import { NavLink } from "react-router-dom"

export const Error = () => {
    return (
        <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">Sorry</h2>
                <h4 className="header2">Sorry! Page not found</h4>
                <p className="warning">
                    Oops ! It seems like page you're trying to access doesn't exist.
                    If you believe there an issue,feel free to report it, and we'll
                    look into it.

                </p>
                <div className="btn btn-group1">
                            <a href="/">
                            <button className="homebtn">Home</button>
                            </a>

                            <a href="/Contact">
                            <button className="btn secondarybtn">Report</button>
                            </a>
                        </div>
            </div>
        </section>
        </>
    )
}