import React from 'react'

export default function VideoPlayer() {
  return (
    <div className='bg-drawing flex justify-center'>
    <video width="1000" controls className='rounded-xl mt-24'>
      <source src='/videos/pay.mp4' type="video/mp4" />
    </video>
  </div>
  )
}
