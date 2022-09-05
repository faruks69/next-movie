import { CastItem } from '@/components';
import { Cast } from '@/model/movie';

interface Props {
  items: Cast[];
}

const CastList = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-10 lg:grid-cols-5 gap-4">
      {items.map((item) => (
        <CastItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CastList;
