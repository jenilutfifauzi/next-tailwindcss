"use client";
import { useEffect, useState } from "react";

function Home() {
  const [theme, setTheme] = useState("");

  const handleClick = (value) => {
    setTheme(value);
    localStorage.setItem("theme", value);
    document.querySelector("html").classList.add(localStorage.getItem("theme"));

    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.remove("light");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark" || (!('theme' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    localStorage.removeItem("theme");
  }, [])

  return (
    <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-2/5">
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Brand
          </div>
          <div>
            <button
              onClick={() => handleClick("light")}
              className="focus:outline-none w-4 h-4 bg-gray-400 rounded-full mr-2"
            ></button>
            <button
              onClick={() => handleClick("dark")}
              className="focus:outline-none w-4 h-4 bg-black rounded-full"
            ></button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-10 py-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Title
            </h1>
            <div className="leading-relaxed text-true-gray-500 dark:text-gray-200 text-lg">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="px-10 py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900 dark:text-gray-200">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
