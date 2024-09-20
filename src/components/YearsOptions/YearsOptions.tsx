import { YEARS } from '@/constants';

function YearsOptions() {
  return (
    <>
      {YEARS.map((year, i) => (
        <option key={i} value={year}>
          {year}
        </option>
      ))}
    </>
  );
}

export default YearsOptions;
