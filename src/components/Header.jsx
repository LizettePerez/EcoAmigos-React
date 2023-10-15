import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../index.css";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">EcoAmigos</span>
            <img className="h-8 w-auto" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"></Popover.Panel>
            </Transition>
          </Popover>

          <NavLink to="/" className="text-m leading-6">
            Inicio
          </NavLink>
          <NavLink to="/eventos" className="text-m leading-6">
            Eventos
          </NavLink>
          <NavLink to="/contacto" className="text-m leading-6">
            Contacto
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/comunidad" className="text-m leading-6 ">
            Iniciar Sesión <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-auto" src={Logo} alt="logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sm leading-6 custom-a custom-active"
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/eventos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sm leading-6 custom-a"
                >
                  Eventos
                </NavLink>
                <NavLink
                  to="/contacto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sm leading-6 custom-a"
                >
                  Contacto
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/comunidad"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sm leading-6 custom-a"
                >
                  Iniciar Sesión
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
