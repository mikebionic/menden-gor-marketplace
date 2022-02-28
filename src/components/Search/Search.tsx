import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

import { IconLabelButton } from 'common/IconLabelButton';
import { history } from 'sapredux/helpers'
import { routeConstants } from 'navigation/routeConstants';

export const Search: React.FC = () => {

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
    e.preventDefault()
    if (search_tag) {
      history.push(`${routeConstants.vGrid.route}?search=${search_tag}`)
    }
  };

  return (
    <form
      name="navbar_search"
      action=""
      onSubmit={handleSubmit}
    >
      <div className="grid grid-rows-1 mx-auto my-0 w-search grid-cols-search">
        <div className="w-32 h-12 rotate-180 bg-white border-2 border-white border-solid rounded-l-full cursor-pointer productColor gap-x-8">
          <IconLabelButton
            className="flex flex-row-reverse items-center w-20 h-4 pl-1 mx-auto my-3 text-sm text-center text-white"
            icon={<IoIosArrowDown className="" />}
            label="Products"
          />
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
        <div className="w-32 h-12 rsearch_tagotate-180 bg-white border-2 border-white border-solid rounded-r-full cursor-pointer productColor gap-x-8">
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
