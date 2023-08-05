import HomePage from '@/components/Home/HomePage'
import Navbar from '@/components/Navbar'

import React, { FC } from 'react'

const page: FC = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default page