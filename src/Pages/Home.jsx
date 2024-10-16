import React, { useEffect, useState } from 'react'
import axios from "axios"
import CoinCard from '../Component/CoinCard'
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import Loading from '../Component/Loading';
import "../Style/Home.css"

function Home() {
    // use State to store the API data
    const [coin, setCoin] = useState([])
    const [loading,sertloading] = useState(true)
    const currency='inr';

    // API initialization and call
    const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=250";
    // const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=250`;

    const callApi = async () => {
        try {
            const res = await axios.get(api)
            setCoin(res.data); 
            console.log(res.data)
            sertloading(false)
        } catch (error) {
            console.log(error)
            alert("api problem")
        }
    }

    useEffect(() => {
        callApi();
    }, [])

    let index=1;


    return (
        <>

        {loading ? <Loading/>:<div>
            
            <div className="infobarCO-container"><center>
            <div className="infobarCO">
              <div>#</div>
              <div style={{ paddingLeft: '80px' }}>Name</div>
              <div style={{ paddingLeft: '190px' }}>Price</div>
              <div style={{ paddingLeft: '150px' }}>24h%</div>
              <div style={{ paddingLeft: '75px' }}><IoIosArrowRoundUp />High(24h)</div>
              <div style={{ paddingLeft: '35px' }}><IoIosArrowRoundDown />Low(24h)</div>
              <div style={{ paddingLeft: '70px' }}>Market Cap</div>
              <div style={{ paddingLeft: '70px' }}>Volume</div>

            </div>
            </center>
          </div>

            <div className="homeMain">
            <div className="coincardStore">
            {coin.map((coindata,index) => {
                return <CoinCard key={coindata.id} coindata={coindata} index={index+1}/>
            })}
            </div>
            </div>  
            </div>
            
        }
        
        </>
    )
}

export default Home;
