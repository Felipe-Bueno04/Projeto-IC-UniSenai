"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-2xl font-bold">Blog Acessível</span>
        </Link>
        
        {/* Menu Responsivo */}
        <Menu as="div" className="relative">
          <Menu.Button className="p-2 rounded-md focus:ring-2 ring-white">
            ☰ Menu
          </Menu.Button>

          <Transition
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/about"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Sobre
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/acessibilidade"
                    className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                  >
                    Acessibilidade
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}
