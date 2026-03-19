import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#F0F1F3]">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default ProtectedLayout