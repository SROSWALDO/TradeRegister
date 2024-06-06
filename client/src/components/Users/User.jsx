import React, { useEffect, useState } from 'react';
import useStore from '../Global/Store';
import axios from 'axios';
import Swal from "sweetalert2";
import trash from "../../assets/delete.svg";
import logo from "../../assets/Logo.png";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Login/Autenticate';

export default function () {

    const { users, setUsers } = useStore();
    const [dataFetched, setDataFetched] = useState(false);
    const { token, isAuthenticated } = useAuth();

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users', {
              headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(response.data);
          } catch (error) {
            console.error('Error al obtener los datos:', error.response ? error.response.data : error.message);
            setUsers([]);
          } finally {
            setDataFetched(true);
          }
    };

    useEffect(() => {
        if (!dataFetched) {
            fetchData();
        }
    }, [dataFetched]);

    const deleteUser = async (userId) => {
        const confirmDelete = await Swal.fire({
            title: "Do you want to delete this register?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`,
        });

        if (confirmDelete.isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:3001/users/${userId}`);
                if (response.status === 200) {
                    setUsers((prevUsers) => prevUsers.filter((r) => r.id !== userId));
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
        <div>

<div className="slider relative font-Poppins w-full bg-[#000]  shadow-2xl h-[90px] items-center flex justify-center ">
                <div className="logo ml-5 flex ">
                    <img className="w-[90px] absolute left-5 top-0 " src={logo} alt="" />
                </div>
                <NavLink to="/home">
                    <div className="toRegisters flex  w-[90px] justify-center rounded-lg text-white mr-8 cursor-pointer transition-all">
                        
                        <p className="text-lg">Form</p>
                    </div>
                </NavLink>

                <NavLink to="/registers">
                    <div className="toRegisters flex  w-[90px] justify-center rounded-lg text-white mr-8 cursor-pointer transition-all">
                        
                        <p className="text-lg">Tables</p>
                    </div>
                </NavLink>

                <NavLink to="/register">
                    <div className="toRegisters flex w-[100px] justify-center rounded-lg text-white mr-8 cursor-pointer transition-all">
                        
                        <p className=" text-lg">Registers</p>
                    </div>
                </NavLink>

            </div>

            <div className="overflow-x-auto mt-6">
                {Array.isArray(users) && users.length > 0 ? ( // Verificamos que users es un arreglo
                    <div className="table-wrapper max-h-[490px] overflow-y-auto">
                        <table className="w-[700px] m-auto bg-white shadow-2xl rounded-lg">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Username</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                    <th className="py-2 px-4 border-b">Password</th>
                                    <th className="py-2 px-4 border-b"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">{user.nombreUsuario}</td>
                                        <td className="py-2 px-4 border-b">{user.correoElectronico}</td>
                                        <td className="py-2 px-4 border-b">{user.contraseña}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button onClick={() => deleteUser(user.id)} className='bg-red-500 rounded-md p-1 hover:bg-red-600'>
                                                <img src={trash} alt="delete" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center py-6">No data available</p>
                )}
            </div>
        </div>
    );
}
