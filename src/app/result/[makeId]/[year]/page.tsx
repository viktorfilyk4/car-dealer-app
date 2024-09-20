import Header from '@/components/Header';
import VehicleModelsList from '@/components/VehicleModelsList';
import { GetVehiclesResponse } from '@/components/VehiclesOptions/VehiclesOptions.types';
import { YEARS } from '@/constants';
import { fetcher } from '@/utils/fetcher';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const result = await fetcher<GetVehiclesResponse>(process.env.NEXT_PUBLIC_GET_VEHICLES_API_URL);

  if (!result) {
    return [];
  }

  const vehicles = result.Results;

  const results = YEARS.map((year) => {
    return vehicles.map((v) => ({
      makeId: v.MakeId.toString(),
      year,
    }));
  });

  // NOTE: I get rate-limit from API when trying to render all paths
  return results.flat().slice(0, 50);
}

export default function ResultPage({
  params,
}: {
  params: {
    makeId: string;
    year: string;
  };
}) {
  const { makeId, year } = params;

  return (
    <>
      <Header>List of models</Header>
      <main className='min-h-full bg-gray-100 p-5 sm:p-8'>
        <section className='rounded-lg bg-white p-5'>
          <Suspense fallback={<div>Loading...</div>}>
            <VehicleModelsList vehicleMakeId={makeId} vehicleYear={year} />
          </Suspense>
        </section>
      </main>
    </>
  );
}
