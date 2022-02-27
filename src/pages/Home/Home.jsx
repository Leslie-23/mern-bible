import BibleLogo from "../../components/Icons/BibleLogoTwo";
import DropChevron from "../../components/Icons/DropChevron";
import { Disclosure, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function Home() {
  // const [showing, setShowing] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowing(true);
  //   }, 200);
  // }, []);

  return (
    <div className="flex text-center flex-col font-theme text-2xl">
      <div className="m-4 flex mx-auto" style={{ maxWidth: 720, height: 144 }}>
        <div className="pr-2 leading-none text-right text-5xl font-semibold text-white">
          The
          <br />
          MERN
          <br />
          Bible
        </div>
        <BibleLogo />
      </div>
      <div className="m-4 text-2xl text-white">
        A King James Version reference
        <br />
        powered by{" "}
        <span className="text-theme-light hover:text-theme-4">
          <a href="https://api.biblesupersearch.com/">BibleSuperSearch</a>
        </span>
      </div>
      <a href="/search" className="underline">
        <button className="p-2 m-4 rounded-lg bg-theme-light font-semibold text-theme-dark hover:bg-theme-4 in-expo duration-150">
          Start Reading
        </button>
      </a>
      <div className="m-4 text-theme-light">
        <a href="/login" className="hover:text-theme-4">
          Log In
        </a>
        <span className="text-white"> or </span>
        <a href="/signup" className="hover:text-theme-4">
          Sign Up
        </a>
      </div>
      <Disclosure as="div" className="m-4">
        {/* {({open}) => (

        )

        
        } */}
        <Disclosure.Button className="py-2 text-theme-light hover:text-theme-4">
          What does "MERN" stand for?
          <span><DropChevron /></span>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 in-expo"
          enterFrom="transform scale-75 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-100 out-expo"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-75 opacity-0"
        >
          <Disclosure.Panel>
            MERN is the acronym for the tech stack used to create this
            application:
            <ul className="underline">
              <li>
                <a href="https://www.mongodb.com/">MongoDB</a>
              </li>
              <li>
                <a href="https://expressjs.com/">Express</a>
              </li>
              <li>
                <a href="https://reactjs.org/">React</a>
              </li>
              <li>
                <a href="https://nodejs.dev/">Node</a>
              </li>
            </ul>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
}
