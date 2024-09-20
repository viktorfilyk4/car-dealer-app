import { HeaderProps } from './Header.types';

function Header({ children }: HeaderProps) {
  return (
    <header className='border-b-[1px] border-b-gray-200 px-6 pb-6 pt-16 sm:px-8'>
      <h2 className='text-2xl font-medium sm:text-3xl'>{children}</h2>
    </header>
  );
}

export default Header;
