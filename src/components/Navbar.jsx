import React from 'react'

const Navbar = () => {
    return (
    <nav className="flex justify-between p-4">
        <div className=' text-teal-400 font-bold text-4xl'>Foodwise</div>
        <ul className='flex justify-between gap-5'>
            <li><a>Home</a></li>
            <li><a>Healthy</a></li>
            <li><a>Waste</a></li>
            <li><a>Program</a></li>
        </ul>
        <button className='bg-green-600 rounded-xl px-5 py-1 font-semibold text-white'>Log In</button>
    </nav>
);
};

export default Navbar;