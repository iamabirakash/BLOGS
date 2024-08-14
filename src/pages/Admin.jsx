import React from 'react'

const Admin = () => {
  return (
    <div>
      <div>
        <form action="" className="grid grid-cols-1 gap-3 bg-white w-[80vw] md:w-[20vw] p-3 rounded-lg">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-lg font-semibold text-gray-600">
              Username
            </label>
            <input type="text" name="username" id="username" placeholder="Enter your username" required className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin
