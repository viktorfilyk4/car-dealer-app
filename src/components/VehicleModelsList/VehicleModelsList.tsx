import { fetcher } from '@/utils/fetcher';
import { constructGetModelsApiUrl } from './VehicleModelsList.helpers';
import { GetModelsReponse } from './VehicleModelsList.types';

async function VehicleModelsList({
  vehicleMakeId,
  vehicleYear,
}: {
  vehicleMakeId: string;
  vehicleYear: string;
}) {
  const url = constructGetModelsApiUrl(vehicleMakeId, vehicleYear);
  const result = await fetcher<GetModelsReponse>(url);

  if (!result) {
    return <div className='text-red-500'>Fetch error: Could not fetch models</div>;
  }

  const models = result.Results;

  return (
    <ul>
      {models.map((model, i) => (
        <li
          key={String(model.Model_ID).concat(`-${i}`)}
          className='border-b-[1px] border-b-gray-100 py-4 last:border-b-0'
        >
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
}

export default VehicleModelsList;
