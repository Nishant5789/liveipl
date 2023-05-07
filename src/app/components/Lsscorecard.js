import Image from 'next/image'
import React from 'react'

const Lsscorecard = (matchobject) => {

  const {date, league_name, match_number, match_status, team1_name, team1_score, team2_name, team2_score} = matchobject

  const shorteam1name = team1_name.split(' ').map(substr => substr.charAt(0)).join('');
  const shorteam2name = team2_name.split(' ').map(substr => substr.charAt(0)).join('');
  return (
    <>
        <div className="rounded-2xl bg-gray-100 transition ease-out duration-700 hover:bg-gray-300 p-4 h-56 min-w-full shadow-2xl ">
          <h1 className="text-lg py-2">{match_number}th Match <span>&middot;</span> {league_name}</h1>
          <div className="pt-4 pb-1 flex-col">
            <div className="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span className="flex-grow  text-lg font-serif">{shorteam1name}</span>
              <p className="text-xl fontbold font-sans">{team1_score}</p>
            </div>
            <div className="flex gap-x-3">
              <Image src="/lsg_log.jpg" className="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span className="flex-grow">{shorteam2name}</span>
              <p className="text-xl fontbold font-sans">{team2_score}</p>
            </div>
          </div>
          <p className="">{match_status}</p>
        </div>
    </>
  )
}

export default Lsscorecard
