import React from 'react'

export default function Usertable() {
  return (
    <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-teal-500 uppercase bg-teal-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        UserNmae
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Full Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Index No
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Year enrolled
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Current class
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       AvaMaaa
                    </th>
                    <td class="px-6 py-4">
                        Ava Emma Stone
                    </td>
                    <td class="px-6 py-4">
                        20125
                    </td>
                    <td class="px-6 py-4">
                        2008
                    </td>
                    <td class="px-6 py-4">
                       5d
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-teal-600 dark:text-teal-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       JaneeM
                    </th>
                    <td class="px-6 py-4">
                       Jane Maria
                    </td>
                    <td class="px-6 py-4">
                        2088
                    </td>
                    <td class="px-6 py-4">
                        2010
                    </td>
                    <td class="px-6 py-4">
                       3A
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-teal-600 dark:text-teal-500 hover:underline">Edit</a>
                    </td>
                </tr>
                
                
                
            </tbody>
        </table>
    </div>
    </div>
  )
}
