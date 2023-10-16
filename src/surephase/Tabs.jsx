import React from 'react';
import { Link } from 'react-router-dom';

function Tabs() {
  return (
    <div>
     
      <header className="header sticky top-0 shadow-xl flex justify-between px-8 py-2">


        <nav className="nav font-semibold text-lg">
          <ul className="flex">
            <Link to={"/general_formula"}>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            General Info
            </li>
            </Link>
          
            <Link to={"/Measurement"}>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            Measurement
            </li>
            </Link>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Connection</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Formula</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Allocation</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">History</a>
            </li>
          </ul>
        </nav>

       
      </header>
    </div>
  );
}

export default Tabs;
