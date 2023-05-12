import Image from 'next/image'
import React from 'react'
import Batleaderbord from './Batleaderbord';
import Bowlleaderbord from './Bowlleaderbord';


const Performers = async () => {

  // const apiurl = 'http://127.0.0.1:5001/stats';
  const apiurl = process.env.IPLAPI_link + "/stats";
  const timestamp = Date.now();
  const url = `${apiurl}?timestamp=${timestamp}`;

  const res = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  });
  const maindata = await res.json();

  // console.log(data);

  // const maindata = JSON.parse(data); 

  const batslist = maindata.top_scorers;
  const bowlslist = maindata.top_wickettakers;

  // console.log(batslist);
  // console.log(bowlslist);

  return (
    <>
    <div className="sm:hidden grid px-4 py-5 bg-pink-700 grid-cols-2">
        <div className="flex gap-x-2 px-2 items-center">
         <Image src="/Batsman.jpeg" width={64} height={40} alt="no pic" className="object-cover h-16 rounded-3xl"/>
         <div className="">
           <h1 className="font-bold text-xl">Top Runscorer</h1>
           <h2 className="font-serif">{batslist[0].name}</h2>
         </div>
        </div>
        <div className="flex gap-x-2 px-2 items-center">
         <Image src="/Bowler.jpeg" width={64} height={40}  className="object-cover h-16 rounded-3xl" alt="no pic"/>
         <div>
           <h1 className="font-bold text-xl">Top Wickettaker</h1>
           {/* <h2 className="font-serif">{bowlslist[0].name}</h2> */}
           <h2 className="font-serif">Rashid Khan</h2>
         </div>
        </div>
     </div>

     {/* display on large screen  */}
     <div className="bg-green-300 hidden sm:flex order-first flex-col gap-y-4 items-center">
        <Batleaderbord  batlist={batslist}/>
        {/* <Bowlleaderbord bowllist={bowlslist}/>     */}
     </div>
    </>
  )
}

export default Performers;



