import { ClipLoader } from 'react-spinners';

import { MovieSliceParams } from '@/redux/movieSlice';
import { ItemGrid, PageHeader, Button } from '@/components';

interface Props extends MovieSliceParams {
  loadMore: () => void;
}

const ItemView = ({
  loading,
  items,
  loadingMore,
  page,
  total_pages,
  loadMore,
}: Props) => {
  return (
    <>
      {/* <Meta title="" description="Views all the movies" /> */}
      <PageHeader />

      <div className="container px-6">
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#06b6d4" size={80} />
          </div>
        ) : (
          <>
            <div>
              <ItemGrid items={items} />
            </div>
            <div className="text-center">
              <ClipLoader loading={loadingMore} color="#06b6d4" size={80} />
            </div>
            {page < total_pages && (
              <div className="mt-4 text-center">
                <Button outline onClick={loadMore}>
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ItemView;
