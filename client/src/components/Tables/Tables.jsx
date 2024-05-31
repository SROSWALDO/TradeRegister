import React, { useEffect, useState } from 'react';
import useStore from '../Global/Store';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/Logo.png";
import trash from "../../assets/trash.svg";
import Swal from "sweetalert2";
import { useAuth } from '../Login/Autenticate'; // Asegúrate de importar el contexto de autenticación

export default function Tables() {
  const { setRegisters, registers } = useStore();
  const [dataFetched, setDataFetched] = useState(false);
  const { users } = useAuth();

  const { token } = useAuth();


  const fetchData = async () => {
    const url = 'http://localhost:3001/register';
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}` // Incluye el token en el encabezado
        }
      });
      const data = response.data;
      if (data && Array.isArray(data.registers)) {
        setRegisters(data.registers);
      } else {
        console.error('Estructura de datos inesperada:', data);
        setRegisters([]); // Aseguramos que siempre sea un arreglo
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error.response ? error.response.data : error.message);
      setRegisters([]); // Aseguramos que siempre sea un arreglo
    } finally {
      setDataFetched(true);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

  const deleteRegister = async (registerId) => {
    const confirmDelete = await Swal.fire({
      title: "Do you want to delete this register?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:3001/register/${registerId}`, {
          headers: {
            Authorization: `Bearer ${token}` // Incluye el token en el encabezado
          }
        });
        if (response.status === 200) {
          setRegisters((prevRegisters) => prevRegisters.filter((r) => r.id !== registerId));
          Swal.fire("Register deleted!", "", "success");
          setDataFetched(false); // Marcar los datos como no recuperados para que el useEffect haga una nueva solicitud
        } else {
          throw new Error('Failed to delete the register');
        }
      } catch (error) {
        console.error("Error al intentar eliminar el registro:", error.message);
        Swal.fire("Error deleting register!", error.message, "error");
      }
    } else if (confirmDelete.isDenied) {
      Swal.fire("Action canceled", "", "info");
    }
  };

  return (
    <div className="contenedor">
      <div className="slider w-full bg-[#000] shadow-2xl h-[90px] items-center flex justify-between">
        <div className="logo ml-5 flex">
          <img className="w-[90px]" src={logo} alt="Logo" />
        </div>
        <NavLink to="/home">
          <div className="toRegisters flex bg-white w-[90px] justify-center rounded-sm text-black mr-8 cursor-pointer transition-all">
            <p className="text-lg">Form</p>
          </div>
        </NavLink>

        {users?.isAdmin && (
          <>
            <NavLink to="/users">
              <div className="toRegisters flex bg-white w-[100px] justify-center rounded-sm text-black mr-8 cursor-pointer transition-all">
                <p className="text-lg">Users</p>
              </div>
            </NavLink>

            <NavLink to="/register">
              <div className="toRegisters flex bg-white w-[100px] justify-center rounded-sm text-black mr-8 cursor-pointer transition-all">
                <p className="text-lg">Registers</p>
              </div>
            </NavLink>
          </>
        )}

        <NavLink to="/logout">
          <div className="toRegisters flex bg-red-600 w-[100px] justify-center rounded-sm text-white mr-8 cursor-pointer transition-all">
            <p className="text-lg">Log out</p>
          </div>
        </NavLink>
      </div>
      <div className="tables-container bg-gray-100 w-full">
        <div className="content bg-gray-100 mt-24 w-[1500px] shadow-lg m-auto h-auto">
          <div className="searchbar shadow-lg flex justify-center">
            <input className="m-2 w-[950px] text-center" type="text" placeholder="Search..." />
          </div>
          <div className="overflow-x-auto mt-6">
            {Array.isArray(registers) && registers.length > 0 ? (
              <div className="table-wrapper max-h-[490px] overflow-y-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">ID</th>
                      <th className="py-2 px-4 border-b">Origen</th>
                      <th className="py-2 px-4 border-b">CP</th>
                      <th className="py-2 px-4 border-b">Direccion</th>
                      <th className="py-2 px-4 border-b">Destino</th>
                      <th className="py-2 px-4 border-b">CP</th>
                      <th className="py-2 px-4 border-b">Dirección</th>
                      <th className="py-2 px-4 border-b">Unidad</th>
                      <th className="py-2 px-4 border-b">Weight</th>
                      <th className="py-2 px-4 border-b">Dimensions</th>
                      <th className="py-2 px-4 border-b">Quantity</th>
                      <th className="py-2 px-4 border-b">Creado en</th>
                      <th className="py-2 px-4 border-b">Usuario</th>
                      <th className="py-2 px-4 border-b"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {registers.map((register, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b text-blue-700 underline">
                          <a href="https://www.youtube.com/?hl=es-419&gl=MX" target="blank">
                            {register.id}
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b">{register.origen}</td>
                        <td className="py-2 px-4 border-b">{register.cp_origen}</td>
                        <td className="py-2 px-4 border-b">{register.direccion_origen}</td>
                        <td className="py-2 px-4 border-b">{register.destino}</td>
                        <td className="py-2 px-4 border-b">{register.cp_destino}</td>
                        <td className="py-2 px-4 border-b">{register.direccion_destino}</td>
                        <td className="py-2 px-4 border-b">{register.unidad}</td>
                        <td className="py-2 px-4 border-b">{register.peso} kg</td>
                        <td className="py-2 px-4 border-b">{register.dimensiones}</td>
                        <td className="py-2 px-4 border-b">{register.cantidad_skids}</td>
                        <td className="py-2 px-4 border-b">{new Date(register.createdAt).toLocaleString()}</td>
                        <td className="py-2 px-4 border-b">{register.usuarioId}</td>
                        <td className="py-2 px-4 border-b">
                          <button onClick={() => deleteRegister(register.id)} className="bg-red-500 rounded-md w-8 p-1 hover:bg-red-600">
                            <img src={trash} alt="Delete" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex justify-center items-center min-h-[300px]">
                <p>No data available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
