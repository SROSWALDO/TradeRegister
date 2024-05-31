// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './Autenticate';
import useStore from '../Global/Store';

export default function Login() {
    const { users, setUsers } = useStore();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        usuario: nombreUsuario,
        password: contraseña,
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        // Maneja la respuesta exitosa
        login(response.data.user, response.data.token); // Aquí se almacena la información del usuario y el token
        setUsers(response.data.user)
        navigate("/home");
      }
    } catch (error) {
      console.error('Error during login', error);
      setError('Incorrect username or password');
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center bg-background-register justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
                Login
              </h1>
              {error && <div className="text-red-500 text-center">{error}</div>}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <label
                    htmlFor="nombreUsuario"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <div className="absolute z-10 inset-y-0 top-7 flex items-center ps-1 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26 26"
                      fill="gray"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="nombreUsuario"
                    id="nombreUsuario"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    className="bg-gray-50 ps-8 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username..."
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="contraseña"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="absolute z-10 inset-y-0 top-7 flex items-center ps-1 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 26 26"
                      fill="gray"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="contraseña"
                    id="contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border ps-8 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="boton-sign pt-5">
                  <button
                    type="submit"
                    className="w-full t-10 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
