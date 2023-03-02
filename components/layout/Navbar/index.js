import React from 'react'
import Image from 'next/image'

const index = () => {
  return (
    <>
      <div className='bg-gray-100 justify-center flex mb-4'>
        <Image
          src='/assets/cocalogo.png'
          alt=""
          width={200}
          height={100}
        />
      </div>

    </>
  )
}

export default index