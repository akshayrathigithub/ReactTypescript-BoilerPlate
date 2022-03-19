import React, { useEffect, useState } from 'react';
import { TOAST_TYPE } from '../../Enum/Enum';
import { Utility } from '../../Utility/Utility';
import { Card } from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import Toggle from '../Toggle/Toggle';
import {
  Friend,
  initialListState,
  ListProps,
  ListState,
} from './List.interface';
import './List.scss';

export const List: React.FC<ListProps> = (props) => {
  const [listState, setListState] = useState<ListState>(
    Utility.deepClone(initialListState)
  );

  useEffect(() => {
    const updatedState = listState;
    requiredPaginationChanges(updatedState, updatedState.allFriends);
    return () => {
      // second
    };
  }, []);

  const requiredPaginationChanges = (
    updatedState: ListState,
    allFriendslist: Friend[]
  ) => {
    const totalPages = Math.ceil(allFriendslist.length / 4);
    const startPageIndex = updatedState.activePage * 4;
    const endPageIndex = totalPages > 1 ? startPageIndex + 4 : totalPages;
    updatedState.activeFriends = allFriendslist.slice(
      startPageIndex,
      endPageIndex
    );
    updatedState.totalPages = totalPages;
    setListState({ ...updatedState });
  };

  const searchFriend = (value: string) => {
    const updatedState = listState;
    updatedState.filteredFriends = updatedState.allFriends.filter((friend) =>
      friend.name.toLowerCase().includes(value.toLowerCase())
    );
    updatedState.activePage = 1;
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  const addNewFriend = (value: string) => {
    const updatedState = listState;
    const newFriend: Friend = {
      id: new Date().getTime(),
      name: value,
      isFavorite: false,
      avator: value[0].toUpperCase(),
    };
    updatedState.allFriends.unshift(newFriend);
    updatedState.filteredFriends.unshift(newFriend);
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  const friendFavoriteUpdated = (friendId: number) => {
    const updatedState = listState;
    const friend = updatedState.activeFriends.find(
      (friend) => friend.id === friendId
    );
    if (friend) {
      let toastMsg = `${friend.name} has been added to favorite list`;
      if (friend.isFavorite) {
        toastMsg = `${friend.name} has been removed from favorite list`;
      }
      friend.isFavorite = !friend.isFavorite;
      props.showToast(toastMsg, TOAST_TYPE.SUCCESS);
    }
    setListState({ ...updatedState });
  };

  const removeFriend = (friendId: number) => {
    const updatedState = listState;
    const friend = updatedState.activeFriends.find(
      (friend) => friend.id === friendId
    );
    updatedState.filteredFriends = updatedState.filteredFriends.filter(
      (friend) => friend.id !== friendId
    );

    if (friend) {
      const toastMsg = `${friend.name} has been removed from friend list`;
      props.showToast(toastMsg, TOAST_TYPE.ERROR);
    }
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  const activePageChanged = (page: number) => {
    const updatedState = listState;
    updatedState.activePage = page;
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="name">Friends List</div>
        <div className="favorite-only">
          <Toggle />
        </div>
      </div>
      <div className="content">
        <Search
          type="text"
          onSearch={(updatedValue: string) => searchFriend(updatedValue)}
          onCreate={(updatedValue: string) => addNewFriend(updatedValue)}
        />
        {listState.activeFriends.map((friend) => {
          return (
            <Card
              key={friend.id}
              friend={friend}
              onFavorite={friendFavoriteUpdated}
              onDelete={removeFriend}
            />
          );
        })}

        <Pagination
          totalPages={listState.totalPages}
          activePage={listState.activePage}
          onPageChange={(page) => {
            activePageChanged(page);
          }}
        />
      </div>
    </div>
  );
};
