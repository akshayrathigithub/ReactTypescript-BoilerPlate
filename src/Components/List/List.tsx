import React, { useEffect, useState } from 'react';
import { TOAST_TYPE } from '../../Enum/Enum';
import { Utility } from '../../Utility/Utility';
import { Card } from '../Card/Card';
import EmptyCard from '../Card/EmptyCard';
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
    updatedState.filteredFriends = [...updatedState.allFriends];
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
    const startPageIndex = (updatedState.activePage - 1) * 4;
    const endPageIndex =
      totalPages > 1 ? startPageIndex + 4 : allFriendslist.length;
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
    updatedState.searchValue = value;
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  const addNewFriend = (value: string) => {
    const updatedState = listState;
    updatedState.searchValue = '';
    const newFriend: Friend = {
      id: new Date().getTime(),
      name: value,
      isFavorite: false,
      avator: value[0].toUpperCase(),
    };
    const toastMsg = `${newFriend.name} has been added to the list`;
    updatedState.allFriends.unshift(newFriend);

    if (updatedState.favoriteFirst) {
      const favoriteFriends: Friend[] = [];
      const unfavoriteFriends: Friend[] = [];
      updatedState.allFriends.forEach((friend) => {
        if (friend.isFavorite) {
          favoriteFriends.push(friend);
        } else {
          unfavoriteFriends.push(friend);
        }
      });
      updatedState.filteredFriends = [...favoriteFriends, ...unfavoriteFriends];
    } else {
      updatedState.filteredFriends = [...updatedState.allFriends];
    }
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
    props.showToast(toastMsg, TOAST_TYPE.SUCCESS);
  };

  const friendFavoriteUpdated = (friendId: number) => {
    const updatedState = listState;
    const friend = updatedState.allFriends.find(
      (friend) => friend.id === friendId
    );
    if (friend) {
      let toastMsg = `${friend.name} has been added to favorite list`;
      if (friend.isFavorite) {
        toastMsg = `${friend.name} has been removed from favorite list`;
      }
      friend.isFavorite = !friend.isFavorite;
      updatedState.filteredFriends = updatedState.allFriends.filter((friend) =>
        friend.name
          .toLowerCase()
          .includes(updatedState.searchValue.toLowerCase())
      );
      if (updatedState.favoriteFirst) {
        const favoriteFriends: Friend[] = [];
        const unfavoriteFriends: Friend[] = [];
        updatedState.allFriends.forEach((friend) => {
          if (friend.isFavorite) {
            favoriteFriends.push(friend);
          } else {
            unfavoriteFriends.push(friend);
          }
        });
        updatedState.filteredFriends = [
          ...favoriteFriends,
          ...unfavoriteFriends,
        ];
      }
      props.showToast(toastMsg, TOAST_TYPE.SUCCESS);
    }
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  const removeFriend = (friendId: number) => {
    const updatedState = listState;
    const friend = updatedState.activeFriends.find(
      (friend) => friend.id === friendId
    );
    updatedState.allFriends = updatedState.allFriends.filter(
      (friend) => friend.id !== friendId
    );

    updatedState.filteredFriends = updatedState.allFriends.filter((friend) =>
      friend.name.toLowerCase().includes(updatedState.searchValue.toLowerCase())
    );

    if (friend) {
      const toastMsg = `${friend.name} has been removed from friend list`;
      props.showToast(toastMsg, TOAST_TYPE.ERROR);
    }
    requiredPaginationChanges(updatedState, updatedState.filteredFriends);
  };

  const favoriteFriendOnTop = (value: boolean) => {
    const updatedState = listState;
    updatedState.favoriteFirst = value;
    if (value) {
      const favoriteFriends: Friend[] = [];
      const unfavoriteFriends: Friend[] = [];
      updatedState.filteredFriends.forEach((friend) => {
        if (friend.isFavorite) {
          favoriteFriends.push(friend);
        } else {
          unfavoriteFriends.push(friend);
        }
      });
      updatedState.filteredFriends = [...favoriteFriends, ...unfavoriteFriends];
    } else {
      updatedState.filteredFriends = updatedState.allFriends.filter((friend) =>
        friend.name
          .toLowerCase()
          .includes(updatedState.searchValue.toLowerCase())
      );
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
          <Toggle onToggle={favoriteFriendOnTop} />
        </div>
      </div>
      <div className="content">
        <Search
          type="text"
          value={listState.searchValue}
          onSearch={(updatedValue: string) => searchFriend(updatedValue)}
          onCreate={(updatedValue: string) => addNewFriend(updatedValue)}
        />
        {listState.filteredFriends.length > 0 ? (
          listState.activeFriends.map((friend) => {
            return (
              <Card
                key={friend.id}
                friend={friend}
                onFavorite={friendFavoriteUpdated}
                onDelete={removeFriend}
              />
            );
          })
        ) : (
          <EmptyCard
            text={
              listState.allFriends.length === 0
                ? 'No existing Friend found. Type in the input and press Enter to add new Friend'
                : 'No friend found. Press enter key to add new Friend'
            }
          />
        )}

        {listState.totalPages > 1 && (
          <Pagination
            totalPages={listState.totalPages}
            activePage={listState.activePage}
            onPageChange={(page) => {
              activePageChanged(page);
            }}
          />
        )}
      </div>
    </div>
  );
};
