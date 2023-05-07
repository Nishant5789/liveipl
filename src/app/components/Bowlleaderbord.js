import Image from 'next/image'
import React from 'react'

const Bowlleaderbord = ({bowllist}) => {
  return (
    <>
       <div className="flex gap-x-2 p-4 items-center">
          <Image src="/jh_avatar.jpg" width={64} height={40} className="object-cover h-16 rounded-3xl" alt="" />
          <div>
            <h1 className="font-bold text-xl">Top Wickettaker</h1>
            <h2 className="font-serif"><span className="text-2xl font-semibold">1. </span>{bowllist[0].name}</h2>
            <hr/>
          </div>
         </div>
         <div className="flex justify-center">
          <ul className="flex flex-col">
          {
            bowllist.splice(1).map((currele, index)=>{
              return <li key={index}>
              <span className="text-lg font-semibold">{index+1}. </span> 
              {currele.name}</li>;
            })
          }
          </ul>
        </div>
    </>
  )
}

export default Bowlleaderbord
