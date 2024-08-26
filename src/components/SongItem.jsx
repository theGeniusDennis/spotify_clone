/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { songsData } from '../assets/assets'

const SongItem = ({name, image, desc, id}) => {
  return (
    <div className='min-w-[100px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="" className="rounded" />
         <p className="font-bold mt-2 mb-1">{name}</p>
         <p className="text-slate-200 text-sm"></p>
    </div>
  )
}

export default SongItem
