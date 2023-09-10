import React from 'react'

export default function Adminstu() {
  return (
    <div> 
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-teal-50 ">
    <form>
        <div class="px-3">
        <h3 class= "block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2 text-center">Register Students</h3>
        </div>

        <div class="bg-white dark:bg-gray-700 shadow-md  px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="-mx-3  mb-6">
        <div class=" px-3 mb-6 md:mb-0">
                        <label for="fullname" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Full Name:</label>
                        <input type="text" id="fullname" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Student's Full Name" required/>
                    </div>
                    </div>
                    <div class="-mx-3  mb-6">
        <div class=" px-3 mb-6 md:mb-0">
                        <label for="email" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Email:</label>
                        <input type="email" id="email" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Student@edu.mail" required/>
                    </div>
                    </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="username" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">UserName:</label>
                        <input type="text" id="username" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName" required/>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label for="password" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Password:</label>
                        <input type="password" id="password" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*****" required/>
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="index" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Index No:</label>
                        <input type="text" id="index" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Studen Index No" required/>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label for="grade" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Grade:</label>
                        <input type="number" id="grade" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Grade" required/>
                    </div><div class="md:w-1/2 px-3">
                        <label for="class" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Class:</label>
                        <input type="text" id="class" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Class" required/>
                    </div>

                </div>

                <button type="submit" class="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-700 dark:focus:ring-blue-800">Submit</button>
                </div>
        </form>
        </div>
        </div>
  )
}
