import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import * as React from "react";
import { HiCheck, HiSelector } from "react-icons/hi";
import { IconType } from "react-icons/lib";

export type SortOption = {
  id: string;
  name: string;
  icon: IconType;
};

type SortListboxProps = {
  selected: SortOption;
  setSelected: React.Dispatch<React.SetStateAction<SortOption>>;
  options: SortOption[];
};

export default function SortListbox({
  selected,
  setSelected,
  options,
}: SortListboxProps) {
  return (
    <div className="max-w-[100px] w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button
            className={clsx(
              "w-full py-2 pl-3 pr-10 font-medium text-left bg-white rounded-md dark:bg-dark  sm:text-sm",
              "focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
              "border border-gray-300 dark:border-gray-600",
              "transform-gpu scale-100 hover:scale-[1.03] active:scale-[0.97]",
              "transition duration-100",
              "animate-shadow"
            )}
          >
            <span className="block truncate">
              <span className="inline-flex items-center gap-2">
                <selected.icon />
                {selected.name}
              </span>
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-300 rounded-md shadow-lg dark:shadow-none dark:border-gray-600 dark:bg-dark max-h-60 focus:outline-none sm:text-sm">
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.id}
                  className={({ active }) =>
                    clsx(
                      "select-none relative py-2 pl-10 pr-4",
                      active
                        ? "dark:bg-primary-300/25 bg-primary-300/10"
                        : "text-gray-700 dark:text-gray-300"
                    )
                  }
                  value={opt}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={clsx(
                          selected ? "font-medium" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {opt.name}
                      </span>
                      {selected ? (
                        <span
                          className={clsx(
                            "absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500 dark:text-primary-300"
                          )}
                        >
                          <HiCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
