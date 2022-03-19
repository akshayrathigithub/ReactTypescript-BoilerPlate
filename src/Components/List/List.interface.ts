import { TOAST_TYPE } from '../../Enum/Enum';

export interface ListState {
  allFriends: Friend[];
  activeFriends: Friend[];
  filteredFriends: Friend[];
  favoriteFirst: boolean;
  activePage: number;
  totalPages: number;
}

export interface ListProps {
  showToast: (message: string, type: TOAST_TYPE) => void;
}

export interface Friend {
  id: number;
  name: string;
  isFavorite: boolean;
  avator: string;
}

export const initialListState: ListState = {
  allFriends: [
    {
      id: 1,
      name: 'John',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 2,
      name: 'Akshay',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 3,
      name: 'Sakshi',
      isFavorite: true,
      avator: 'J',
    },
    {
      id: 4,
      name: 'Rathi',
      isFavorite: true,
      avator: 'J',
    },
    {
      id: 5,
      name: 'Joe',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 6,
      name: 'Jenny',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 7,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 8,
      name: '',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 9,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 10,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 11,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 12,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 13,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 14,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 15,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 16,
      name: 'Rathi',
      isFavorite: true,
      avator: 'J',
    },
    {
      id: 17,
      name: 'Joe',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 18,
      name: 'Jenny',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 19,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 20,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 21,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 22,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 23,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 24,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 25,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 26,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 27,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 28,
      name: 'John',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 29,
      name: 'Akshay',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 30,
      name: 'Sakshi',
      isFavorite: true,
      avator: 'J',
    },
    {
      id: 31,
      name: 'Rathi',
      isFavorite: true,
      avator: 'J',
    },
    {
      id: 32,
      name: 'Joe',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 33,
      name: 'Jenny',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 34,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 35,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 36,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 37,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 38,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 39,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 40,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 41,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 42,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 43,
      name: 'Rathi',
      isFavorite: true,
      avator: 'J',
    },
    {
      id: 44,
      name: 'Joe',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 45,
      name: 'Jenny',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 46,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 47,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 48,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 49,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 50,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 51,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 52,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 53,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
    {
      id: 54,
      name: 'Jules',
      isFavorite: false,
      avator: 'J',
    },
  ],
  activeFriends: [],
  filteredFriends: [],
  activePage: 5,
  favoriteFirst: false,
  totalPages: 1,
};
