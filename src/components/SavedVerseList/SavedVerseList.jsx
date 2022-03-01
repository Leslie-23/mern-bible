import { useState } from "react";
import { remove } from "../../utils/savedService";
import DropChevron from "../Icons/DropChevron";
import { Disclosure, Transition } from "@headlessui/react";

export default function SavedVerseList({ verses, setVerses }) {
  console.log(verses, "<= my verses");

  const handleRemove = (v) => {
    remove(v);
    let tempArray = verses.filter((verse) => verse !== v);
    console.log(tempArray);
    setVerses(tempArray);
    console.log(verses);
  };

  const verseList = verses.map((v, i) => {
    return (
      <div key={i}>
        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex py-2 text-theme-light hover:text-theme-4">
                <span className="mr-2 text-2xl">
                  {v.book} {v.chapter}:{v.verse}
                </span>
                <DropChevron open={open} />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 in-expo"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 out-expo"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  <p
                    className="flex text-xl text-white"
                  >
                    {v.text}
                    <span>
                      <button
                        className="px-2 ml-2 text-theme-dark font-semibold bg-white rounded-lg transition in-expo duration-150 hover:bg-theme-light"
                        onClick={() => handleRemove(v)}
                      >
                        -
                      </button>
                    </span>
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    );
  });
  return <div>{verseList}</div>;
}
