import { nanoid } from 'nanoid';
import { Users } from '../types';

export const users: Users[] = [
  {
    id: nanoid(5),
    name: 'Jalen',
  },
  {
    id: nanoid(5),
    name: 'Kerry',
    address: '347 Sumner Lane',
  },
  {
    id: nanoid(5),
    name: 'Mitch',
    address: '347 Sumner Lane',
  },
  {
    id: nanoid(5),
    address: '347 Sumner Lane',
  },
];
