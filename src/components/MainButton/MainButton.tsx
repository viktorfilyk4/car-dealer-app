import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type MainButtonProps = {
  makeId: string;
  year: string;
  className?: string;
};

function MainButton({ makeId, year, className }: MainButtonProps) {
  const disabled = !!!(makeId && year);

  return (
    <Link
      href={`/result/${makeId}/${year}`}
      prefetch={!disabled}
      className={twMerge(
        'block rounded-xl bg-indigo-500 py-3 text-center text-white transition hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none active:bg-indigo-700',
        disabled && 'pointer-events-none bg-indigo-300 focus:bg-indigo-300',
        className,
      )}
    >
      Next
    </Link>
  );
}

export default MainButton;
