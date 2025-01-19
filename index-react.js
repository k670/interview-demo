import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className="w-[1024px] bg-white shadow rounded-lg">
    	  <header className="bg-neutral-200 text-neutral-950 px-6 py-4 rounded-t-lg flex items-center gap-4">
    	    <h1 className="font-title text-lg font-semibold">Interview Preparation Hub</h1>
    	  </header>
    	  <nav className="bg-neutral-100 px-4 py-2 border-b border-neutral-300">
    	    <ul className="flex gap-4">
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          HTML
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          CSS
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          JavaScript
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          SQL
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          Python
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          Java
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          PHP
    	        </a>
    	      </li>
    	      <li>
    	        <a href="#" className="text-primary-700 font-medium hover:underline">
    	          React
    	        </a>
    	      </li>
    	    </ul>
    	  </nav>
    	  <main className="p-6">
    	    <section className="mb-6">
    	      <h2 className="font-title text-xl font-semibold mb-2">Welcome to the Interview Hub</h2>
    	      <p className="text-neutral-700">
    	        This is your go-to place to prepare for technical interviews. Navigate through
    	        coding languages, frameworks, and databases to sharpen your skills.
    	      </p>
    	    </section>
    	    <section>
    	      <h3 className="font-title text-lg font-semibold mb-2">Reference Materials</h3>
    	      <div className="grid grid-cols-3 gap-4">
    	        <div className="bg-neutral-100 p-4 rounded-md">
    	          <h4 className="font-medium text-neutral-950">HTML</h4>
    	          <p className="text-neutral-700 text-sm">
    	            Dive into the structure of web pages. Learn the foundation.
    	          </p>
    	        </div>
    	        <div className="bg-neutral-100 p-4 rounded-md">
    	          <h4 className="font-medium text-neutral-950">CSS</h4>
    	          <p className="text-neutral-700 text-sm">
    	            Make things beautiful. Learn styling and layout techniques.
    	          </p>
    	        </div>
    	        <div className="bg-neutral-100 p-4 rounded-md">
    	          <h4 className="font-medium text-neutral-950">JavaScript</h4>
    	          <p className="text-neutral-700 text-sm">
    	            Add functionality to your web apps. Master scripting.
    	          </p>
    	        </div>
    	        <div className="bg-neutral-100 p-4 rounded-md">
    	          <h4 className="font-medium text-neutral-950">Python</h4>
    	          <p className="text-neutral-700 text-sm">
    	            The multi-purpose language for modern applications.
    	          </p>
    	        </div>
    	        <div className="bg-neutral-100 p-4 rounded-md">
    	          <h4 className="font-medium text-neutral-950">SQL</h4>
    	          <p className="text-neutral-700 text-sm">
    	            Work with databases. Learn querying efficiently.
    	          </p>
    	        </div>
    	        <div className="bg-neutral-100 p-4 rounded-md">
    	          <h4 className="font-medium text-neutral-950">React</h4>
    	          <p className="text-neutral-700 text-sm">
    	            Build dynamic UI with this powerful JavaScript library.
    	          </p>
    	        </div>
    	      </div>
    	    </section>
    	  </main>
    	</div> 
            </div>
  )
}

