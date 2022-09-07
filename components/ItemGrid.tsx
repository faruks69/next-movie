import { ItemCard } from '@/components';
import { MovieItemProps } from '@/model/movie';
import { TypeTvDetail } from '@/model/tv';

interface Props {
  items: MovieItemProps[] | TypeTvDetail[];
}

const ItemGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-x-8 gap-y-16">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemGrid;
