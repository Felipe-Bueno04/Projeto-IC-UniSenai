"use client";

import Link from "next/link";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFont = () => {
    const newSize = Math.min(fontSize + 10, 200);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFont = () => {
    const newSize = Math.max(80, fontSize - 10);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleContrast = () => {
    setHighContrast((prev) => {
      const newContrast = !prev;
      const html = document.documentElement;
      if (newContrast) {
        html.classList.add("contrast");
      } else {
        html.classList.remove("contrast");
      }
      return newContrast;
    });
  };


  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="font-poppins text-2xl">Juntos e Misturados</span>
        </Link>

        <Menu as="div" className="relative">
          <Menu.Button className="p-2 rounded-md focus:ring-2 ring-white cursor-pointer">
            ☰ Menu
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 bg-white text-black shadow-lg rounded-lg z-50 p-2 space-y-2">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/about"
                    className={`block px-4 py-2 rounded ${active ? "bg-gray-100" : ""}`}
                  >
                    Sobre
                  </Link>
                )}
              </Menu.Item>

              <hr className="my-2" />

              {/* Acessibilidade */}
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
                    {highContrast ? "Desativar Contraste" : "Ativar Contraste"}
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}
