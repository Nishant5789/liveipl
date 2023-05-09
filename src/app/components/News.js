import Image from 'next/image'
import React from 'react'
import Newscard from './Newscard';

const News = async () => {

  const url = 'http://127.0.0.1:5001/news';
  
  const res = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  });
  const data = await res.json();
  const Newslist = data.seriesnews; 

  // console.log(Newslist);

  return (
    <> 
    <div className="sm:flex sm:flex-col sm:col-span-3 bg-pink-400 lg:col-span-2 lg:grid-cols-none lg:h-[42rem] lg:overflow-y-scroll  flex-cols bg-red">
      <div className="text-4xl  font-extrabold bg-blue-600 px- font-serif text-center">News</div>
        <div className="grid grid-cols-1 gap-y-3">
        {
          Newslist.map((currele, index)=>{
            return <Newscard key={index} {...currele}/>
          })
        }
        </div>
    </div>
    </>
  )
}

export default News
