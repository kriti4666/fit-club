import React from "react";
import { plansData } from "../../data/plansData";
import "../Plans/Plan.css";
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-conatiner">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans-cart */}
      <div className="my-plans" id="plans-i">
        {plansData.map((plan, i) => (
          <div className="plans" key={i}>
           
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            
            <div className="features">
              {plan.features.map((item, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{item}</span>
                </div>
              ))}
            </div>


            <div>
              <span>See more benefits  </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
