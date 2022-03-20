export interface CardProps {
  friend: {
    id: number;
    name: string;
    isFavorite: boolean;
    avator: string;
  };
  onFavorite: (id: number) => void;
  onDelete: (id: number) => void;
  emptyState?: boolean;
}

export interface EmptyCardProps {
  text: string;
}
