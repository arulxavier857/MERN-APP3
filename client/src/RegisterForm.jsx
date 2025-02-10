import React from "react";

function RegisterForm(){
    return(
        <div>
            <h1 className="text-center">Registeration Form</h1>
            <form action="" className="flex flex-col items-center p-4 bg-gray-200 w-[75%] mx-auto">
                <div>
                   <input type="text" placeholder="Full Name" required
                      className="border border-gray-700 px-4 py-2 rounded-lg mb-4"
                    />
                </div>
                <div>
                   <input type="email" placeholder="Email Id" required
                     className="border border-gray-700 px-4 py-2 rounded-lg mb-4"
                   />
                </div>
                <div>
                   <input type="text" placeholder="Phone" required
                   className="border border-gray-700 px-4 py-2 rounded-lg mb-4"
                   />
                </div>
                <div>
                   <input type="text" placeholder="Location" required
                   className="border border-gray-700 px-4 py-2 rounded-lg mb-4"
                   />
                </div>
                <div>
                   <button type='submit'
                    className="bg-blue-800 text-white px-4 py-3 rounded-full"
                    >
                    Register
                   </button>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm