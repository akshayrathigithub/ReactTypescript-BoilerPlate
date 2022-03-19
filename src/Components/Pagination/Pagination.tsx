import React, { useEffect, useState } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import LeftIcon from '../../Assests/Icons/left.svg';
import RightIcon from '../../Assests/Icons/right.svg';
import './Pagination.scss';
import { Utility } from '../../Utility/Utility';
import {
  initialPaginationState,
  PaginationProps,
  PaginationState,
} from './Pagination.interface';

const Pagination: React.FC<PaginationProps> = (props) => {
  const [paginationState, setPaginationState] = useState<PaginationState>(
    Utility.deepClone(initialPaginationState)
  );

  useEffect(() => {
    const updatedState = paginationState;
    updatedState.totalPages = props.totalPages;
    updatedState.activePage = props.activePage;
    let activeIndex = props.activePage;
    if (activeIndex + 4 >= props.totalPages) {
      activeIndex = props.totalPages - 4;
    }

    if (updatedState.totalPages < 5) {
      updatedState.hideFirstDots = true;
      updatedState.hideLastDots = true;
      updatedState.firstPage = 1;
      updatedState.secondPage = updatedState.totalPages > 1 ? 2 : 0;
      updatedState.thirdPage = updatedState.totalPages > 2 ? 3 : 0;
      updatedState.fourthPage = updatedState.totalPages > 3 ? 4 : 0;
      updatedState.lastPage = 0;
      if (updatedState.totalPages > 4) {
        updatedState.lastPage = updatedState.totalPages;
      }
    } else {
      updatedState.hideFirstDots = true;
      updatedState.hideLastDots = false;
      updatedState.firstPage = activeIndex;
      updatedState.secondPage = activeIndex + 1;
      updatedState.thirdPage = activeIndex + 2;
      updatedState.fourthPage = activeIndex + 3;
      updatedState.lastPage = updatedState.totalPages;
      if (updatedState.firstPage !== 1) {
        updatedState.hideFirstDots = false;
      }
      if (updatedState.lastPage - 1 === updatedState.fourthPage) {
        updatedState.hideLastDots = true;
      }
    }
    setPaginationState({ ...updatedState });
    return () => {
      // second
    };
  }, [props.activePage, props.totalPages]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > paginationState.totalPages) {
      return;
    }
    props.onPageChange(page);
  };

  return (
    <div className="pagination">
      <div
        className="btn"
        onClick={() => handlePageChange(paginationState.activePage - 1)}
        role="presentation"
      >
        <SVGIcon>
          <LeftIcon />
        </SVGIcon>
      </div>
      {!paginationState.hideFirstDots && <div className="dots">...</div>}
      {paginationState.firstPage && (
        <div
          className={`number ${
            paginationState.firstPage === props.activePage ? 'active' : ''
          }`}
        >
          {paginationState.firstPage}
        </div>
      )}
      {paginationState.secondPage > 0 && (
        <div
          className={`number ${
            paginationState.secondPage === props.activePage ? 'active' : ''
          }`}
        >
          {paginationState.secondPage}
        </div>
      )}
      {paginationState.thirdPage > 0 && (
        <div
          className={`number ${
            paginationState.thirdPage === props.activePage ? 'active' : ''
          }`}
        >
          {paginationState.thirdPage}
        </div>
      )}
      {paginationState.fourthPage > 0 && (
        <div
          className={`number ${
            paginationState.fourthPage === props.activePage ? 'active' : ''
          }`}
        >
          {paginationState.fourthPage}
        </div>
      )}
      {!paginationState.hideLastDots && <div className="dots">...</div>}
      {paginationState.lastPage > 0 && (
        <div
          className={`number ${
            paginationState.lastPage === props.activePage ? 'active' : ''
          }`}
        >
          {paginationState.lastPage}
        </div>
      )}

      <div
        className="btn"
        onClick={() => handlePageChange(paginationState.activePage + 1)}
        role="presentation"
      >
        <SVGIcon>
          <RightIcon />
        </SVGIcon>
      </div>
    </div>
  );
};
export default Pagination;
