import Image from 'next/image'
import React from 'react'

const Newscard = ({title, description}) => {

    const shortdescripation = description.slice(0,108);
    return (
      <>
        <div className="flex p-4 gap-x-2 ">
              <Image src="/news_vk.jpg" alt="" className="sm:h-32 sm:object-fill" suppressHydrationWarning height={500} width={500} />
              <div className="gap-y-2 ">
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{shortdescripation}..</p>
              </div>
            </div>
      </>
    )
}

export default Newscard
