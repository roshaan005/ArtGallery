import React from 'react'
import GlobalStatsCard from './globalStatsCard'
import Navbar from './navbar'
import Cards from './Cards'


function Dashboard() {
    return (
        <>
        <Navbar/>
        <div className="w-full h-7 bg-orange-500"></div>
        <div className="flex flex-col items-center mt-10 w-full  h-screen">
            <div className="w-full flex flex-col items-center just">
            <GlobalStatsCard/>
            <div className = "mt-9 text-white">
                <h1 className="text-xl sm:text-3xl font-semibold md:text-3xl lg:text-4xl">Top 10 Crypto Currencies in the world</h1>
            </div>
     
             
             
               


             <section className="ml-2 mr-2 sm:w-f grid-extra gap-y-7 gap-x-2 grid-phone  lg:cols-lg lg:grid-cols-4 lg:grid-rows-5 lg:w-f sm:w-11/12  mt-10 w-96  ">
            <Cards/>
    
           </section>

            </div>
            <footer className="bg-zinc-900 mt-8 w-full text-center">made by roshaan</footer>

      
            

            



        </div>
        </>
    )
}

export default Dashboard
