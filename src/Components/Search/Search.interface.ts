export interface SearchProps {
  type: string;
  hasError: boolean;
  errorMsg?: string;
  onUpdate?: (text: string) => void;
  value?: string;
}
