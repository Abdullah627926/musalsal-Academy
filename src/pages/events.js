import { Button } from "antd";
import React from 'react'

const events = () => {
  return (
    <>
        <div className="bg-[#aaccff] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Find your Event!</h1>
          <p className="mb-12">Steer your career with our wide range of diverse events customized just for you!</p>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl text-blue-800 font-bold mb-4">Create your event with us!</h2>
            <p className="mb-8">Drop us a message if you wish to organize an event or become an event speaker</p>
            <Button href="/contact" className="bg-blue-600 hover:bg-blue-700 text-xl text-white font-bold  px-6 rounded">Let's Talk</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default events;


