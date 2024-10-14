import React, { useState } from 'react'
import "../Style/CoinCard.css"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function CoinCard({coindata,index}) {
  const[star,setstar]=useState(true)
  const starColor=()=>{
    setstar(!star)
  }
  return (
    <>
        <div className="coincardMain">
            <div id='first' className="section"><div onClick={starColor}>{star ? <FaRegStar />:<FaStar style={{color:'gold'}}/>}</div>   <div>{index}</div>   <div style={{marginRight:'-8px'}}><img src={coindata.image} style={{height:'24px',width:'24px'}}/></div>    </div>
            <div id='sec' className="section" style={{width:'16%',paddingLeft:'5px'}}><h5 style={{fontWeight:'500',fontSize:'15px'}}>{coindata.name.slice(0,15)}</h5><p style={{fontSize:'15px',fontWeight:'400',color:'gray',marginLeft:'10px'}}>{coindata.symbol.toUpperCase()}</p></div>
            <div className="section" > ₹{coindata.current_price.toLocaleString('en-IN')}</div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
        </div>
    </>
  )
}

export default CoinCard
