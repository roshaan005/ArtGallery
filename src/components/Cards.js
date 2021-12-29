import React,{useState,useEffect} from 'react'
import CoinCard from './coinCard'
import Chart from './chart'
import millify from 'millify';
import axios from 'axios';
function Cards() {
    const [coinCollection,setCoinCollection] = useState([])

   

    useEffect(()=>{
       

        let options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coins/?limit=10`,
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '733fad986dmsha33d11eb1f5d1ecp1ebfcbjsn7712eafff11b'
        }
        };

        axios.request(options).then(function (response) {
            let coinData = response.data.data.coins;
            console.log(coinData)
            setCoinCollection(coinData)
           
            
            
            
        }).catch(function (error) {
            console.error(error);
        });
    },[])


    return (
       <>
        {coinCollection.map((coin) => {
            return(
                < >
                <div  className="rounded-xl bg-gray-100 bg-opacity-5 flex flex-col items-center">
                    <CoinCard  coinName={coin.symbol} coinPrice={millify(coin.price)} coinUrl={coin.iconUrl} marketCap={millify(coin.marketCap)} coinVolume = {millify(coin.volume)}/>
                </div>  
                <Chart coinId={coin.id}/>
          </>
            )
          
        })}
        </>
     
    
     
    )
}

export default Cards
