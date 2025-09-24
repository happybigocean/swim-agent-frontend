'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Icon from '@/components/ui/icon'

const ChatBlankState = () => {
  
  return (
    <section
      className="flex flex-col items-center text-center font-geist"
      aria-label="Welcome message"
    >
      <div className="flex max-w-3xl flex-col gap-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-[600] tracking-tight"
        >
          <div className="flex flex-col items-center gap-10 text-center">
            {/* Icons in one row */}
            <div className="flex gap-20">
              <Icon type="agno" size="lg" />
              <Icon type="agent" size="lg" />
            </div>

            {/* Text centered below icons */}
            <span className="font-[500]">
              How does your swim time compare to others?
            </span>
          </div>
        </motion.h1>
      </div>
    </section>
  )
}

export default ChatBlankState
