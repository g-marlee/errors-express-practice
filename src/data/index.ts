import { nanoid } from 'nanoid';
import { User } from '../types/index';

export const users: User[] = [
  {
    id: nanoid(5),
    name: 'Jalen',
    address: "347 Sumner Lane"
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
    name: "Marlee",
    address: '347 Sumner Lane',
  },
];
