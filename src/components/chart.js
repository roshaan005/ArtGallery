import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




function Chart({coinId}) {

    const [BTCHistory,setBTCHistory] = useState([])
    useEffect(()=>{

        let axios = require("axios").default;

let options = {
  method: 'GET',
  url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history/7d`,
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '733fad986dmsha33d11eb1f5d1ecp1ebfcbjsn7712eafff11b'
  }
};

axios.request(options).then(function (response) {
	setBTCHistory(response.data.data.history)
}).catch(function (error) {
	console.error(error);
});
    })
    return (
        <div>
            
      <ResponsiveContainer  width="100%" height="100%">
         <LineChart width={300} height={100} data={BTCHistory}>
           <Line type="monotone" dataKey="price" stroke="red" strokeWidth={2} />         </LineChart>
      </ResponsiveContainer>


            
        </div>
    )
}



export default Chart
