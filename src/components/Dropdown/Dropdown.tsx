'use client';

import { DropdownProps } from './Dropdown.types';

function Dropdown({ title, children, handleSelectChange }: DropdownProps) {
  // Replace spaces with '-'
  const selectName = title.replace(/ /g, '-').toLowerCase() + '-select';

  return (
    <div className='pb-8'>
      <label className='block pb-4 text-base font-medium sm:text-lg' htmlFor={selectName}>
        {title}
      </label>
      <select
        onChange={handleSelectChange}
        defaultValue={'0'}
        id={selectName}
        name={selectName}
        className='w-full rounded-md px-5 py-4 text-sm outline outline-slate-100 hover:cursor-pointer hover:outline-slate-300 sm:text-base'
      >
        <option disabled value='0'>
          select {title.toLowerCase()}
        </option>
        {children}
      </select>
    </div>
  );
}

export default Dropdown;
