import React from 'react'
import Card from './Card'
// import './src/index.css'

function Foreground() {

  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 items-center justify-center'>
        <Card />
    </div>
  )
}

export default Foreground