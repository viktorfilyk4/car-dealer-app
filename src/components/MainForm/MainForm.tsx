'use client';

import { useState, ChangeEvent } from 'react';
import Dropdown from '../Dropdown';
import MainButton from '../MainButton';
import VehiclesOptions from '../VehiclesOptions';
import YearsOptions from '../YearsOptions';

function MainForm() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [selectedVehicleYear, setSelectedVehicleYear] = useState<string>('');

  const handleSelectVehicleId = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicleId(event.target.value);
  };
  const handleSelectVehicleYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicleYear(event.target.value);
  };

  return (
    <form className='sm:max-w-[400px]'>
      <Dropdown title='Make' handleSelectChange={handleSelectVehicleId}>
        <VehiclesOptions />
      </Dropdown>
      <Dropdown title='Year' handleSelectChange={handleSelectVehicleYear}>
        <YearsOptions />
      </Dropdown>
      <MainButton
        makeId={selectedVehicleId}
        year={selectedVehicleYear}
        className='mb-5 mt-20 sm:max-w-[250px]'
      ></MainButton>
    </form>
  );
}

export default MainForm;
