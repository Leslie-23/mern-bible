import BibleLogo from "../../components/Icons/BibleLogoTwo";
import { Disclosure, Transition } from "@headlessui/react";

export default function Home() {
  return (
    <div className="flex text-center flex-col font-theme text-2xl">
      <div className="m-8 flex mx-auto" style={{ maxWidth: 720, height: 144 }}>
        <div className="pr-2 leading-none text-right text-5xl font-semibold text-white">
          The
          <br />
          MERN
          <br />
          Bible
        </div>
        <BibleLogo />
      </div>
      <h2 className="text-2xl text-white">
        A King James Version reference
        <br />
        powered by{" "}
        <a href="https://api.biblesupersearch.com/">BibleSuperSearch</a>
      </h2>
      <a href="/search" className="underline">
        <button className="p-2 m-8 rounded-lg bg-theme-light font-semibold text-theme-dark hover:bg-theme-4 in-expo duration-150">
          Start Reading
        </button>
      </a>
      <Disclosure as="div" className="text-white">
        <Disclosure.Button className="py-2 underline">
          What does "MERN" stand for?
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 in-expo"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 out-expo"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
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
