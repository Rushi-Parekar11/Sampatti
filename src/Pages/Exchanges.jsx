import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExcCard from '../Component/ExcCard';
import Loading from '../Component/Loading';
import '../Style/Exchanges.css';

function Exchanges() {
  const [exchange, setExchange] = useState([]);
  const [exLoading, setExLoading] = useState(true);

  const apiexc = 'https://api.coingecko.com/api/v3/exchanges?vs_currency=inr';

  const functionForApi = async () => {
    try {
      const getData = await axios.get(apiexc);
      setExchange(getData.data);
      setExLoading(false);
      console.log(getData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    functionForApi();
  }, []);

  return (
    <>
      {exLoading ? (
        <Loading />
      ) : (
        <div>
          <center>
            <h3>Top Cryptocurrency Spot Exchanges</h3>
          </center>
          <div className="infobar-container"><center>
            <div className="infobar">
              <div>Rank</div>
              <div style={{ paddingLeft: '90px' }}>Exchange</div>
              <div style={{ paddingLeft: '190px' }}>Trade volume (24h)</div>
              <div style={{ paddingLeft: '70px' }}>Trade volume Normalization</div>
              <div style={{ paddingLeft: '120px' }}>Info</div>
              <div style={{ paddingLeft: '150px' }}>Action</div>
            </div>
            </center>
          </div>
          <div className="mainExchange">
            <div className="ExcardStore">
              {exchange.map((data) => {
                return <ExcCard key={data.id} data={data} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Exchanges;
