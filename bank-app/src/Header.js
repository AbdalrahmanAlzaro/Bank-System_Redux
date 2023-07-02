import React from 'react'

function Header() {
  return (
    <div>
          <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="text-white text-lg font-semibold">Bank App</div>
          <div className="space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header