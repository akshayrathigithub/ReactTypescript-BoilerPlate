import { TOAST_TYPE } from '../../Enum/Enum';

export interface ListState {
  allFriends: Friend[];
  activeFriends: Friend[];
  filteredFriends: Friend[];
  favoriteFirst: boolean;
  activePage: number;
  totalPages: number;
  searchValue: string;
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
      id: 9,
      name: 'Wanda Maximoff',
      isFavorite: false,
      avator: 'W',
    },
    {
      id: 1,
      name: 'Tony Stark',
      isFavorite: false,
      avator: 'T',
    },
    {
      id: 2,
      name: 'Steve Rogers',
      isFavorite: false,
      avator: 'S',
    },
    {
      id: 3,
      name: 'Bruce Banner',
      isFavorite: true,
      avator: 'B',
    },
    {
      id: 4,
      name: 'Thor',
      isFavorite: true,
      avator: 'T',
    },
    {
      id: 5,
      name: 'Natasha Romanoff',
      isFavorite: false,
      avator: 'N',
    },
    {
      id: 6,
      name: 'Clint Barton',
      isFavorite: false,
      avator: 'C',
    },
    {
      id: 7,
      name: 'Peter Parker',
      isFavorite: false,
      avator: 'P',
    },
    {
      id: 8,
      name: 'Peter Quill',
      isFavorite: false,
      avator: 'P',
    },
    {
      id: 10,
      name: 'Groot',
      isFavorite: false,
      avator: 'G',
    },
  ],
  activeFriends: [],
  filteredFriends: [],
  activePage: 1,
  favoriteFirst: false,
  totalPages: 1,
  searchValue: '',
};
