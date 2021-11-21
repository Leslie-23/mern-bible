import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function NavDropdown({ user, handleLogout }) {
  return (
    <Menu as="div" className="z-10 bg-primary-dark flex justify-end">
      {({ open }) => (
        <>
          <Menu.Button as="button" className="z-10 px-4 py-1 border-2 border-black rounded-full">
            {user.username.split(" ")[0][0]}
          </Menu.Button>
          <br/>
          <Transition
            show={open}
            enter="transition duration-200 in-expo"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 out-expo"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="z-10 px-4">
              <Menu.Item disabled as="p">
                {user.username}
                <br />
                {user.email}
              </Menu.Item>
              <Menu.Item as="p">
                <a href="/saved">My Saved Verses</a>
              </Menu.Item>
              <Menu.Item as="p">
                <a href="/logout" onClick={handleLogout}>
                  Log Out
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
