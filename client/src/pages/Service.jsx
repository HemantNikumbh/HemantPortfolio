import { useAuth } from "../store/auth"

export const Service = () =>{
    const{services} = useAuth();
    console.log(services)

    return(
        <>
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {services.map((curElem,index)=>{
                 const{provider,service,description,price}=curElem
                    return(
                    <div className="card" key={index}>
                    <div className="card-img">
                        <img src="/image/Login.png" alt="services image" width="200"/>
                    </div>
                    <div className="card-detail">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p> 
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>                   
                </div>
                );

                })}

            </div>
        </section>
        </>
    )
}