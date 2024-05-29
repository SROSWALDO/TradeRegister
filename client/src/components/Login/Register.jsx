import React, { useState } from 'react'
import Swal from "sweetalert2";
import axios from "axios";
import logo from "../../assets/Logo.png";
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({
        nombreUsuario: "",
        correoElectronico: "",
        contraseña: "",
    });

    const navigate = useNavigate();

    const succes = () => {
        Swal.fire({
          title: "Successful",
          text: "User Created",
          icon: "success",
        });
    };

    const handleChange = (e) => {
        const { name, value } =  e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/users",formData);
            succes();
            console.log("Resgistro creado", response.data );

            //limpiar formulario
        setFormData({
          nombreUsuario: "",
          correoElectronico: "",
          contraseña: "",
        });
        navigate("/home");
        } catch (error) {
            console.error("Eroor al crear el resgistro", error.message);
        }
    }

  return (
    <div>
        <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center bg-background-register justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          {/* <img className="w-24 rounded-full  mr-2" src={logo} alt="logo"/> */}
            
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="nombreUsuario" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                      <input type="username" name="nombreUsuario" id="nombreUsuario" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username..." required=""/>
                  </div>
                  <div>
                      <label for="correoElectronico" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                      <input type="email" name="correoElectronico" id="correoElectronico" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div  >
                      <label for="contraseña" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="contraseña" id="contraseña" onChange={handleChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 <div className="boton-sign pt-5 ">
                 <button type="submit" className="w-full t-10 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                 </div>
                  
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
    </div>
  )
}
