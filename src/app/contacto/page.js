'use client'
import React, { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí puedes manejar el envío del formulario
    // Por ejemplo, enviarlo a un servidor o API
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      <div className=" flex items-center justify-center" style={{marginTop:'100px'}}>
        <div className=" p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-pink-300 mb-6">Contactenos</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-pink-300">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-pink-300">Apellido</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-pink-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-pink-300">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>



    </div>
  )
}

export default page