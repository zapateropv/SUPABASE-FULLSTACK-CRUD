import React from 'react'

const AddRecord = ({name, setName, email, setEmail, age, setAge, submitRecord, toggle, updateDB}) => {
    
    return (
        <div className="flex justify-center items-center  bg-gray-50">
            <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-5 border border-gray-100"
            onSubmit={ toggle ? updateDB : submitRecord }>
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    User Information
                </h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />

                <input
                    type="number"
                    placeholder="Age"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />

                <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />

                <button
                    type="submit "
                    className={` w-full py-3   text-white font-medium rounded-xl transition cursor-pointer ${toggle ? 'bg-green-7   00 hover:bg-green-800' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {toggle ? "Save" : "Submit"}
                </button>
            </form>
        </div>

    )
}

export default AddRecord
