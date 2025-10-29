import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import dayjs from 'dayjs';
const Record = ({users, deleteDB, editRecord}) => {

   
  return (
  <div className="p-6">
  <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
    <table className="min-w-full text-sm text-gray-800">
      <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold tracking-wider">
        <tr>
          <th className="px-6 py-4 text-left">ID</th>
          <th className="px-6 py-4 text-left">Date Created</th>
          <th className="px-6 py-4 text-left">Full Name</th>
          <th className="px-6 py-4 text-left">Age</th>
          <th className="px-6 py-4 text-left">Email</th>
          <th className="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {users.map((user, index) => (
          <tr
            key={user.id}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-gray-100 transition-colors`}
          >
            <td className="px-6 py-4">{user.id}</td>
            <td className="px-6 py-4"> {dayjs(user.created_at).format('MMM D, YYYY h:mm A')}</td>
            <td className="px-6 py-4 font-medium">{user.full_name}</td>
            <td className="px-6 py-4">{user.age}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4 text-center flex items-center justify-center">
              <button
                className="p-2 rounded-full hover:bg-red-50 text-red-500 hover:text-red-600 transition cursor-pointer"
                
                title="Delete User"
              >
                <FaRegTrashAlt className="text-lg" onClick={()=>deleteDB(user.id)}/>
              </button>
              <button
                className="p-2 rounded-full  cursor-pointer  transition"
                title="Edit User"
              >
                <FaEdit onClick={()=> editRecord(user.id, user.full_name, user.age, user.email)}/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  )
}

export default Record
