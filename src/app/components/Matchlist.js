import React from 'react'
import Lsscorecard from './Lsscorecard';

const Matchlist = async () => {

    // const apiurl = 'http://127.0.0.1:5001/livematch';
    const apiurl = process.env.IPLAPI_link + "livematch";
    const timestamp = Date.now();
    const url = `${apiurl}?timestamp=${timestamp}`;
    // console.log(url);
  
    const res = await fetch(url);
    const data = await res.json();
    // const maindata = JSON.parse(data); 
    
    // console.log(data);
    const matchlist = data.livematches;
    // console.log(matchlist);
  return (
    <>
    <div className='px-4 py-2 flex sm:hidden overflow-x-scroll'>
    {
        matchlist.slice(0,6).map((currele, index) => {

          const {description, score1, score2, status, team1, team2} = currele

          return( 
            <div key={index} className="rounded-2xl  h-56 min-w-[30rem] mx-4 shadow-lg bg-slate-200">
                <h1 className="text-lg bg-slate-400 px-2 py-2">{description}</h1>
                <div className="pt-4 pb-1 flex-col">
                  <div className="flex justify-around gap-x-3 px-4 pb-3">
                    {/* <Image src="/rcb_logo.jpg" alt="" width={5} height={5} /> */}
                    <span className="flex-grow  text-lg font-serif">{team1}</span>
                    <p className="text-xl fontbold font-sans">{score1}</p>
                  </div>
                  <div className="flex gap-x-3 px-4 ">
                    {/* <Image src="/lsg_log.jpg" className="text-lg font-serif" alt="" width={5} height={5} /> */}
                    <span className="flex-grow">{team2}</span>
                    <p className="text-xl fontbold font-sans">{score2}</p>
                  </div>
                </div>
                <p className="py-4 px-4">{status}</p>
          </div>)
        })
    }
      
    </div>


    <div className="bg-blue-400 shadow-2xl col-span-2 hidden p-4 sm:overflow-y-scroll sm:gap-y-4 sm:flex sm:h-[43rem] sm:flex-col">
      {
        matchlist.slice(0,6).map((currele, index)=>{
          return  <Lsscorecard key={index} {...currele} />
        })
      }
    </div>
    </>
  )
}

export default Matchlist

