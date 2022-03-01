import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

import { IconLabelButton } from 'common/IconLabelButton';
import { history } from 'sapredux/helpers';
import { routeConstants } from 'navigation/routeConstants';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export const Search: React.FC = () => {
  const [dropdownState, onDropdownStateChange] = useState(false);

  const [inputs, setInputs] = useState({
    search_tag: '',
    categoryId: 0,
  });
  const { search_tag, categoryId } = inputs;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search_tag) {
      history.push(`${routeConstants.vGrid.route}?search=${search_tag}`);
    }
  };

  const search_types = [
    {
      id: 1,
      name: 'Products',
      selected: true,
    },
    {
      id: 2,
      name: 'Suppliers',
      selected: false,
    },
  ];
  const [current_search_type, set_current_search_type] = useState(
    search_types[0],
  );

  const handleSearchTypeChange = (id: number) => {
    search_types.map((s_type: any) => {
      if (s_type.id === id) {
        s_type.selected = true;
        set_current_search_type(s_type);
      } else {
        s_type.selected = false;
      }
    });
  };

  const SearchType = () => {
    return (
      <div className="grid w-32 h-auto mt-4 overflow-x-hidden overflow-y-auto text-base font-medium shadow-lg left-12 bg-fullwhite">
        {search_types.map((s_type: any, idx: number) => (
          <div
            key={idx}
            onClick={() => handleSearchTypeChange(s_type.id)}
            className="w-full p-2 text-center hover:bg-gray-100 hover:text-socialBarItemHover"
          >
            {s_type.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <form name="navbar_search" action="" onSubmit={handleSubmit}>
      <div className="grid grid-rows-1 mx-auto my-0 w-search grid-cols-search">
        <div
          className="w-32 h-12 rotate-180 bg-white border-2 border-white border-solid rounded-l-full cursor-pointer productColor gap-x-8"
          onClick={() =>
            onDropdownStateChange((dropdownState) => !dropdownState)
          }
        >
          <IconLabelButton
            className="flex flex-row-reverse items-center w-20 h-4 pl-1 mx-auto my-3 text-sm text-center text-white cursor-pointer"
            icon={<IoIosArrowDown className="" />}
            label={current_search_type.name}
          />
          <Transition
            show={dropdownState}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-300"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {dropdownState ? <SearchType /> : null}
          </Transition>
        </div>
        <div className="w-full h-12 bg-white">
          <input
            type="text"
            className="w-full h-full text-sm border-0 border-white outline-none placeholder-c8 ring-0 ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
            placeholder="What are you looking for..."
            name="search_tag"
            value={search_tag}
            onChange={handleChange}
          />
        </div>
        <div className="w-32 h-12 bg-white border-2 border-white border-solid rounded-r-full cursor-pointer rsearch_tagotate-180 productColor gap-x-8">
          <IconLabelButton
            className="flex items-center w-20 h-4 pl-1 mx-auto my-3 text-sm text-center text-white"
            icon={<AiOutlineSearch />}
            label="Search"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};
