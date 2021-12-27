import React, { useEffect, useState } from 'react'
import StatsCard from './statsCard';
import millify from 'millify';


function GlobalStatsCard() {

    const [coins,setCoins] = useState();
    const [markets,setMarkets] = useState();
    const [exchanges,setExchanges] = useState();
    const [marketCap,setMarketCap] = useState();

    useEffect(()=>{
        let axios = require("axios").default;

        let options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/stats',
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '733fad986dmsha33d11eb1f5d1ecp1ebfcbjsn7712eafff11b'
        }
        };

        axios.request(options).then(function (response) {
            let data = response.data.data;
            setCoins(millify(data.totalCoins))
            setExchanges(millify(data.totalExchanges))
            setMarketCap(millify(data.totalMarketCap))
            setMarkets(millify(data.totalMarkets))
        }).catch(function (error) {
            console.error(error);
        });
        })
    return (
        <section className="sm:grid-cols-4 gap-3 rounded-lg sm:grid-rows-none sm:grid-cols-4 sm:h-44 md:grid-rows-none  md:h-44 md:w-10/12  grid grid-cols-2 grid-rows-2 w-11/12 h-64">
               <StatsCard color={"text-green-500"} Title={"total coins"} amount={coins}/>
               <StatsCard color={"text-yellow-500"} Title={"total exchanges"} amount={exchanges}/>
               <StatsCard color={"text-red-700"} Title={"total Market Cap"} amount={marketCap}/>
               <StatsCard color={"text-orange-500"} Title={"total Markets"} amount={markets}/>
               
            </section>
            
    )
}

export default GlobalStatsCard
