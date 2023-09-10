import React from 'react'

export default function Formteacher() {
  return (
    <div>
        <form>
            <div class=" px-3">
            <h3 class= "block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2 text-center">Add Questions Here</h3>
            </div>
            <div class="bg-white dark:bg-gray-700 shadow-md  px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="sub" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Subject:</label>
                        <input type="text" id="sub" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required/>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label for="title" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Unit Title:</label>
                        <input type="text" id="tile" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Unit" required/>
                    </div>
                </div>
                          
                    <div>
                        <label for="que" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Add new question:</label>
                        <textarea id="que" rows="4" class="block p-2.5 w-full text-sm bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Question" required></textarea>
                    
                    </div>
                           
                    <div class="-mx-3 md:flex mb-8"></div>
                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label for="title" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Options:</label>
                            </div>
                             </div>
                                <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                
                                    <input type="text" id="op1" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 1" required/>
                                </div>
                                <div class="md:w-1/2 px-3">

                                    <input type="text" id="op2" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 2" required/>
                                </div>
                                </div>
                                
                                <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                
                                    <input type="text" id="op3" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 3" required/>
                                </div>
                                <div class="md:w-1/2 px-3">

                                    <input type="text" id="op4" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 4" required/>
                                </div>
                                </div>
                                <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    
                                    <label for="corect" class="block uppercase tracking-wide text-grey-darker dark:text-white text-xs font-bold mb-2">Correct Option:</label>
                                    <input type="number" id="tile" class="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correct option" required/>
                                
                                </div>
                                </div>

                            <button type="submit" class="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-700 dark:focus:ring-blue-800">Submit</button>
                        
            </div>
        </form>
    </div>

    
  )
}

