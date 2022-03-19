export interface PaginationState {
  hideFirstDots: boolean;
  hideLastDots: boolean;
  activePage: number;
  totalPages: number;
  firstPage: number;
  secondPage: number;
  thirdPage: number;
  fourthPage: number;
  lastPage: number;
}

export interface PaginationProps {
  onPageChange: (page: number) => void;
  activePage: number;
  totalPages: number;
}

export const initialPaginationState: PaginationState = {
  hideFirstDots: true,
  hideLastDots: false,
  activePage: 1,
  totalPages: 1,
  firstPage: 1,
  secondPage: 1,
  thirdPage: 1,
  fourthPage: 1,
  lastPage: 1,
};
