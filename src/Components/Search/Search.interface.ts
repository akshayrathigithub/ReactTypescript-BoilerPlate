export interface SearchProps {
  type: string;
  onSearch: (text: string) => void;
  onCreate: (text: string) => void;
}

export interface SearchState {
  value: string;
  errorMsg: string;
  hasError: boolean;
}

export const initialSearchState: SearchState = {
  value: '',
  errorMsg: '',
  hasError: false,
};
