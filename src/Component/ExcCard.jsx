import React, { useState } from 'react'
import "../Style/ExcCard.css"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function ExcCard({data}) {

  return (
    <>
<a href={data.url}  target='blank' style={{textDecoration:'none',color:'inherit'}}>
        <div className="ExccardMain">
        <div id='Excfirst' className="Excsection">   <div>#{data.trust_score_rank}</div> 
          <div style={{marginRight:'-20px'}}><img src={data.image} style={{height:'20px',width:'20px'}}/></div>    </div>

            <div id='Excsec' className="Excsection" style={{width:'22%',paddingLeft:'7px'}}><h5 style={{fontWeight:'500',fontSize:'15px'}}>{data.name.slice(0,12)}</h5></div>
            <div className="Excsection" style={{width:'17%'}} > ₹{data.trade_volume_24h_btc.toString().slice(0,9)}</div>
            <div className="Excsection" style={{width:'17%'}}>₹{data.trade_volume_24h_btc_normalized.toString().slice(0,9)}</div>
            <div className="Excsection" id='country'><div>{data.country}</div> <div>{data.year_established}</div></div>
            <div className="Excsection" id='score'><button type="button" style={{width: '120px', height: '35px'}} class="btn btn-outline-primary w-5">Trade Now</button></div>
        </div>
        </a>
    </>
  )
}

export default ExcCard
