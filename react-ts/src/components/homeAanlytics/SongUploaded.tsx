import React from 'react'
import { SongUpload } from '../../assets'
const SongUploaded: React.FC = () => {
  return (
    <section className='bg-GrayBg h-[7rem] rounded-2xl'>
      <main className='p-5 pl-8 flex flex-row gap-1'>
        <div className="flex flex-row gap-4">
          <div>
            <img src={SongUpload} alt="Song icon" />
          </div>
          <span className='text-White font-semibold text-[18px]'>Song Uploaded</span>
        </div>
      </main>
    </section>
  )
}

export default SongUploaded
