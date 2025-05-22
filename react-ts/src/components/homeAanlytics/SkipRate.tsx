import React from 'react'
import { SkipRate } from '../../assets'

const SkipRates: React.FC = () => {
  return (
    <section className='bg-GrayBg h-[7rem] rounded-2xl'>
      <main className='p-5 pl-8 flex flex-row gap-1'>
        <div className="flex flex-row gap-4">
          <div>
            <img src={SkipRate} alt="Song icon" />
          </div>
          <span className='text-White font-semibold text-[18px]'>Skip Rate</span>
        </div>
      </main>
    </section>
  )
}

export default SkipRates
