import { GetStaticProps, NextPage } from 'next';

import { MainSlider, ItemSlider, Meta } from '@/components';
import { getHomeData } from '@/ultis/tmdbApi';
import { MovieItemProps } from '@/model/movie';
// import useMobileDetect from '@/hooks/useMobileDetect';

interface Props {
  data: { [id: string]: MovieItemProps[] };
}

const Home: NextPage<Props> = ({ data }) => {
  // const { isMobile } = useMobileDetect();
  // const isM = isMobile();

  return (
    <>
      <Meta
        title="TV Film"
        description="Watch Movies and TV show"
        image="/preview.png"
      />

      <div>
        <MainSlider movieItems={data['Popular Movies']} />
        <div className="container px-6">
          {Object.keys(data).map((key) => (
            <ItemSlider title={key} key={key} items={data[key]} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await getHomeData();
    return {
      props: {
        data,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
      revalidate: true,
    };
  }
};

export default Home;
