import React, { useState } from 'react'
import "../Style/CoinCard.css"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
function CoinCard({coindata,index}) {
  const[star,setstar]=useState(true)
  const starColor=()=>{
    setstar(!star)
  }

  const PositiveNegitive = (posNig) => {
    return posNig > 0 ? <FaCaretUp style={{color:'green'}}/> : <FaCaretDown style={{color:'red'}}/>;
  };

  const posNig = coindata.price_change_percentage_24h > 0;
  return (
    <>
        <div className="coincardMain"> 
            <div id='first' className="section"><div onClick={starColor}>{star ? <FaRegStar />:<FaStar style={{color:'gold'}}/>}</div>   <div>{index}</div>   <div style={{marginRight:'-8px'}}><img src={coindata.image} style={{height:'24px',width:'24px'}}/></div>    </div>
            <div id='sec' className="section" style={{width:'19%',paddingLeft:'5px'}}><h5 style={{fontWeight:'500',fontSize:'15px'}}>{coindata.name.slice(0,15)}</h5><p style={{fontSize:'15px',fontWeight:'400',color:'gray',marginLeft:'10px'}}>{coindata.symbol.toUpperCase()}</p></div>
            <div className="section" style={posNig ? { color: 'green' } : { color: 'red' }} id='price'> ₹{coindata.current_price.toLocaleString('en-IN')}</div>
            <div className="section" style={posNig ? { color: 'green' } : { color: 'red' }} id='posNig'>{PositiveNegitive(coindata.price_change_percentage_24h)}
            {coindata.price_change_percentage_24h.toLocaleString().slice(0,4)}%</div>
            <div className="section">{coindata.high_24h}</div>
            <div className="section">{coindata.low_24h}</div>
            <div className="section" id='marketcap'>{coindata.market_cap}</div>
            <div className="section" id='volume'>{coindata.total_volume}</div>
        </div>
    </>
  )
}

export default CoinCard
