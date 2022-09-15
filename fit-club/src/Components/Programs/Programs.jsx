import React from 'react'
import "./Programs.css"
import { programsData } from '../../data/programsData'
import rightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs" id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>explore our</span>
            <span >program</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="programes-categ">
            {
                programsData.map((item) => (
                    <div className="category">
                        {item.image}
                        <span>{item.heading}</span>
                        <span>{item.details}</span>
                        <div className="join-now">
                            <span>Join Now</span><img src={rightArrow} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programs