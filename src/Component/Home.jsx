import React, { useEffect, useState } from 'react'
import axios from "axios"
import CoinCard from './CoinCard'
import Loading from './Loading';
import "../Style/Home.css"


function Home() {
    // use State to store the API data
    const [coin, setCoin] = useState([])
    const [loading,sertloading] = useState(true)

    // API initialization and call
    const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=250"
    const callApi = async () => {
        try {
            const res = await axios.get(api)
            setCoin(res.data); 
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
        <center>home</center>
            <hr />
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
