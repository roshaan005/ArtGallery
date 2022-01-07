import React,{useState,useEffect} from 'react'
import CoinCard from './coinCard'
import Chart from './chart'
import millify from 'millify';
import axios from 'axios';
import Loader from './loader';
import GlobalStatsCard from './globalStatsCard';
function MainSection() {
    const [loader,setLoader] = useState(true)
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
            setLoader(false)
            let coinData = response.data.data.coins;
            console.log(coinData)
            setCoinCollection(coinData)
           
            
            
            
        }).catch(function (error) {
           
            setLoader(false)
        });
    },[])


    if(loader){
        return(<Loader/>)

    }else if(!loader){
        return (
            <>

<div className="flex flex-col items-center mt-10 w-full  h-screen">
            <div className="w-full flex flex-col items-center just">
            <GlobalStatsCard/>
            <div className = "mt-9 text-white">
                <h1 className="text-xl sm:text-3xl font-semibold md:text-3xl lg:text-4xl">Top 10 Crypto Currencies in the world</h1>
            </div>
     
             
             
               


             <section className="ml-2 mr-2 sm:w-f grid-extra gap-y-7 gap-x-2 grid-phone  lg:cols-lg lg:grid-cols-4 lg:grid-rows-5 lg:w-f sm:w-11/12  mt-10 w-96  ">
             {
             
             
             coinCollection.map((coin) => {
                 return(
                     <>
                     <div  className="rounded-xl bg-gray-100 bg-opacity-5 flex flex-col items-center">
                         <CoinCard  coinName={coin.symbol} coinPrice={millify(coin.price)} coinUrl={coin.iconUrl} marketCap={millify(coin.marketCap)} coinVolume = {millify(coin.volume)} status={loader}/>
                     </div>  
                     <Chart coinId={coin.id}/>
               </>
                 )
               
             })}
    
           </section>

            </div>
            <footer className=" border-t-2 text-gray-500 border-solid border-zinc-900 h-40 mt-8 w-full text-center">Made by <a href="https://github.com/roshaan005/crypto_analytics">roshaan</a></footer>

      
            

            



        </div>






        </>
          
         )
        
    }


    
}

export default MainSection
