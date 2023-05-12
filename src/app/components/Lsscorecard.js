import Image from 'next/image'
import React from 'react'

const Lsscorecard = (matchobject) => {

  const {description, score1, score2, status, team1, team2} = matchobject

  return (
    <>
        <div className="rounded-2xl bg-gray-100 transition ease-out duration-700 hover:bg-gray-300 p-4 h-56 min-w-full shadow-2xl ">
          <h1 className="text-lg py-2">{description}</h1>
          <div className="pt-4 pb-1 flex-col">
            <div className="flex justify-around gap-x-3 pb-3">
              {/* <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" /> */}
              <span className="flex-grow  text-lg font-serif">{team1}</span>
              <p className="text-xl fontbold font-sans">{score1}</p>
            </div>
            <div className="flex gap-x-3">
              {/* <Image src="/lsg_log.jpg" className="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" /> */}
              <span className="flex-grow">{team2}</span>
              <p className="text-xl fontbold font-sans">{score2}</p>
            </div>
          </div>
          <p className="">{status}</p>
        </div>
    </>
  )
}

export default Lsscorecard
