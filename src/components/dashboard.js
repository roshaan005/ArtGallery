import React from 'react'
import GlobalStatsCard from './globalStatsCard'
import Navbar from './navbar'
import MainSection from './MainSection'


function Dashboard() {
    return (
        <>
       
        <Navbar/>
        <div className="w-full h-7 bg-orange-500"></div>
        <MainSection/>
        
        </>
    )
}

export default Dashboard
