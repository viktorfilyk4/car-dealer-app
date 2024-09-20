import { ReactNode, ChangeEvent } from 'react';

export type DropdownProps = {
  children: ReactNode;
  title: string;
  // eslint-disable-next-line no-unused-vars
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
