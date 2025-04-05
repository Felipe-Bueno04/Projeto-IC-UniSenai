"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AccessibilityToolbar() {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast");
  };

  const increaseFont = () => {
    const newSize = fontSize + 0.1;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}em`;
  };

  const decreaseFont = () => {
    const newSize = Math.max(1, fontSize - 0.1);
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}em`;
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            ♿ Acessibilidade
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 space-y-2 z-50">
            <Menu.Item>
              {() => (
                <button
                  onClick={increaseFont}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Aumentar Fonte
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  onClick={decreaseFont}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Diminuir Fonte
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  onClick={toggleContrast}
                  className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {highContrast ? "Desativar Contraste" : "Ativar Alto Contraste"}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
