import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 fixed bottom-0 w-full">
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="text-gray-400">
          <p className="text-sm mb-2">© 2023 Bank App. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer> 
  )
}

export default Footer