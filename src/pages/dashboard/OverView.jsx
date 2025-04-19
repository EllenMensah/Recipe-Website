import React from 'react'

const OverView = () => {
  return (
    <div>
       {/* Main Content */}
       <main className="flex-1 p-6 bg-[#FEF2F2] h-full">
        <h1 className="text-3xl font-bold mb-4">Welcome, Chef!</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Recipes</h2>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Pending Approval</h2>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Total Views</h2>
            <p className="text-2xl font-bold">1,250</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Recipes</h2>
          {/* You can map through recipes here */}
          <p>No recent activity yet.</p>
        </div>
      </main>
    </div>
  )
}

export default OverView