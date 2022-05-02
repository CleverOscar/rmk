import React from 'react'

export default function Navbar(){
    return(
        <div>
            <nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div class="container-fluid">
                    <a class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
                        <img class="mr-2 h-fit w-1/12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="" loading="lazy" />
                        <span class="font-medium">Meta Mask Tutorial</span>
                    </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}