import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="py-2 px-8 border-b-2 flex justify-between">
      <h1 className="Logo font-bold text-2xl">
        <Link href="/">BABa</Link>
      </h1>
      <ul className="md:flex space-x-4 font-medium hidden">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/materials">Learning Materials</Link>
        </li>
        <li>
          <Link href="/contribute">Contribute</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <HiMenu size={24} />
            </Menu.Button>
          </div>
          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-medium text-lg text-center">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <Link href="/">home</Link>
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link href="/materials">Learning Materials</Link>
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link href="/">Contribute</Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
