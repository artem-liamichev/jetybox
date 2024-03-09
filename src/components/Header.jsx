import React, { useState, useEffect, useRef } from "react";

import langSelect from "../assets/lang-select.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="px-4 border-white min-w-[375px] top-3">
      <nav className="flex justify-between items-center mt-3">
        <div className="w-16 h-9 rounded-[4px] p-[0.5px] bg-gradient-to-r from-gray-600  to-transparent">
          <div className="back rounded-[4px] h-full flex bg-[#2e2e2e] items-center justify-center">
            <span>RU</span>
            {/* <img className="ml-1 w-3 h-3 bg-[#f4cfa4]" srs={langSelect} alt="Описание изображения" /> */}
            <div className="ml-1">
              <div className="h-[1px] mb-[-0.8px] w-3 bg-[#f4cfa4] rotate-[45deg]"></div>
              <div className="ml-[9px] h-[1px] w-3 bg-[#f4cfa4] rotate-[135deg]"></div>
            </div>
          </div>
        </div>

        <p>Logo</p>
        <button
          className="flex flex-col space-y-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <div className="w-7 h-0.5 bg-white"></div>
          <div className="w-7 h-0.5 bg-white"></div>
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            className="backdrop-filter backdrop-blur-lg bg-gray-800 bg-opacity-50 absolute top-0 right-3 p-5 bg-transparent rounded-lg"
          >
            <ul className="flex flex-col space-y-3">
              <li>Разработка</li>
              <li>Реклама</li>
              <li>Социальные медиа</li>
            </ul>
          </div>
        )}
      </nav>
      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </header>
  );
}

export default Header;
