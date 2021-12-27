import React from 'react'

function StatsCard({Title,amount,color}) {
    return (
        <div>
            <div className="shadow-2xl h-full border-2 border-stone-800 bg-white p-5 rounded-md bg-opacity-5 backdrop-filter backdrop-blur-lg">
                    <div className="flex w-full  h-100 items-center justify-between">
                        <div className="text-white text-sm sm:text-md">{Title}</div>
                        </div>
    
                    <div className={`text-center mt-5 text-3xl ${color} md:mt-8 md:text-5xl`}>{amount}</div>


                </div>

            
        </div>
    )
}

export default StatsCard

