import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return (
        <div>
            <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                            <h6>Company information</h6>
                            <hr/>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eos, quam, ab asperiores reprehenderit, quas ipsum reiciendis hic quis eveniet ipsa odit ducimus nostrum atque 
                        temporibus vero voluptatem iusto non.
                    </p>

                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr/>
                    <div><NavLink to = "/"></NavLink>Home</div>
                    <div><NavLink to = "/about">About</NavLink></div>
                    <div><NavLink to = "/"></NavLink>Contact</div>  
                    <div><NavLink to = "/"></NavLink>Bolg</div>

                </div>
                <div className="col-md-4">
                    <h6>Contact information</h6>
                    <div><p className="text-white mb-1">Banglore</p></div>
                    <div><p className="text-white mb-1">+91 7093327893</p></div>
                    <div><p className="text-white mb-1">+91 8765432132</p></div>
                    <div><p className="text-white mb-1">saipriya@gm</p></div>
                </div>

            </section>

        </div>
    )
}
export default Footer ;