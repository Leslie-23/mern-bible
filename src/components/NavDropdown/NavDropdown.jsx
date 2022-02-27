import { Menu, Transition } from "@headlessui/react";
import HamburgerIcon from "../Icons/HamburgerIcon";

export default function NavDropdown({ user, handleLogout }) {
  return (
    <Menu
      as="div"
      className="absolute right-0 flex flex-col justify-end text-right text-xl bg-primary"
    >
      {({ open }) => (
        <>
          {user ? (
            <Menu.Button
              as="button"
              className="absolute top-0 right-0 w-12 h-12 pt-1.5 text-theme-dark border-4 border-theme-dark rounded-full"
            >
              {user.username.split(" ")[0][0]}
            </Menu.Button>
          ) : (
            <Menu.Button as="button" className="absolute top-0 right-0">
              <HamburgerIcon />
            </Menu.Button>
          )}
          <Transition
            show={open}
            enter="transition duration-200 in-expo"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 out-expo"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="p-2 mt-12 bg-blue-500 rounded-xl">
              {user ? (
                <>
                  <Menu.Item disabled as="p">
                    {user.username}
                    <br />
                    {user.email}
                  </Menu.Item>
                  <Menu.Item as="p">
                    <a href="/saved">My Saved Verses</a>
                  </Menu.Item>
                  <Menu.Item as="p">
                    <a
                      href="/logout"
                      className="underline"
                      onClick={handleLogout}
                    >
                      Log Out
                    </a>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item as="p">
                    <a href="/login">Log In</a>
                  </Menu.Item>
                  <Menu.Item as="p">
                    <a href="/signup">Sign Up</a>
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
