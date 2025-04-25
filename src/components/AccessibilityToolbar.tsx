"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function AccessibilityToolbar() {
  const [fontSize, setFontSize] = useState(100); // agora é em %

  const increaseFont = () => {
    const newSize = Math.min(fontSize + 10, 200); // máximo 200%
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFont = () => {
    const newSize = Math.max(80, fontSize - 10); // mínimo 80%
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            ♿
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
          <Menu.Items className="absolute mt-2 w-56 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 space-y-2 z-50">
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
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
