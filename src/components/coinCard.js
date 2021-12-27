import React, { useEffect, useState } from 'react'
import axios from 'axios';
import millify from 'millify';

function CoinCard({coinUrl,coinName,coinPrice,coinVolume,marketCap,coinType}) {

    return (
        <div className = "rounded w-full">
            <div className='md:mt-4 mt-3 flex  justify-between  items-center'>
                <div className="ml-4 flex">
                    <img className = "mr-3 md:w-8 md:h-8 w-6 h-6" src = {`${coinUrl}`}/>
                    <h1 className = "md:text-2xl  font-semibold text-lg text-white">{coinName}</h1>
                </div>
                <div className="mr-2 md:text-lg lg:text-md text-white">{`MC: ${marketCap}`}</div>

            </div>
            <h1 className="ml-4 md:mt-7 md:text-4xl text-yellow-500 text-3xl mt-2">{`$${coinPrice}`}</h1>
           <div className="md:mt-5  flex justify-between  h-10">
            <p className="ml-4  text-white mt-2 md:mt-1  md:text-lg mb-2">{`v = ${coinVolume}`}</p>
            <div className="md:mr-5 bg-green-600 mr-4 rounded-xl h-6 w-12 md:h-7 md:w-12 text-center">{coinType}</div>

           </div>
           


        </div>
            
          
            
        
    )
}

export default CoinCard

