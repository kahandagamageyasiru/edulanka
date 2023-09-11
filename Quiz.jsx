import React from 'react'

export default function Quiz() {
  return (
    
    <body class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="max-w-md p-4 bg-teal-50 rounded shadow-lg">
            <h1 class="text-2xl font-bold mb-4">Quiz Title</h1>
    
           
            <div class="mb-6">
                <p class="font-semibold">Question 1: What is the capital of France?</p>
                <div class="mt-2">
                    <label class="block mb-2">
                        <input type="radio" name="question1" class="mr-2" value="option1"/>
                        Option 1: Paris
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="question1" class="mr-2" value="option2"/>
                        Option 2: London
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="question1" class="mr-2" value="option3"/>
                        Option 3: Madrid
                    </label>                 
                    <label class="block mb-2">
                        <input type="radio" name="question1" class="mr-2" value="option4"/>
                        Option 4: spain
                    </label>

                </div>
            </div>
    
   
            <div class="mb-6">
                <p class="font-semibold">Question 2: What is the largest planet in our solar system?</p>
                <div class="mt-2">
                    <label class="block mb-2">
                        <input type="radio" name="question2" class="mr-2" value="option1"/>
                        Option 1: Earth
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="question2" class="mr-2" value="option2"/>
                        Option 2: Mars
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="question2" class="mr-2" value="option3"/>
                        Option 3: Jupiter
                    </label>
                    <label class="block mb-2">
                        <input type="radio" name="question2" class="mr-2" value="option4"/>
                        Option 4: Venus
                    </label>
                </div>
            </div>
    
          
            <div class="text-center">
                <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Submit</button>
            </div>
        </div>
    </body>

    
  )
}
