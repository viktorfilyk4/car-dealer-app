'use client';

import { fetcher } from '@/utils/fetcher';
import { useEffect, useState } from 'react';
import { GetVehiclesResponse, VehicleResult } from './VehiclesOptions.types';
import { enqueueSnackbar } from 'notistack';

// TODO: For some reasons, I cannot make this component `async` and wrap in `Suspense`
function VehiclesOptions() {
  const [vehicles, setVehicles] = useState<VehicleResult[]>([]);

  useEffect(() => {
    async function fetchVehicles() {
      const result = await fetcher<GetVehiclesResponse>(
        process.env.NEXT_PUBLIC_GET_VEHICLES_API_URL,
      );

      if (!result) {
        enqueueSnackbar('Fetch was not successful. Reload the page', { variant: 'error' });
        return;
      }

      setVehicles(result.Results);
    }

    fetchVehicles();
  }, []);

  if (!vehicles.length) {
    return <option disabled>Loading...</option>;
  }

  return (
    <>
      {vehicles.map((v) => (
        <option key={v.MakeId} value={v.MakeId}>
          {v.MakeName}
        </option>
      ))}
    </>
  );
}

export default VehiclesOptions;
