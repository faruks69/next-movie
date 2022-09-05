import '@/styles/globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

import { Provider } from 'react-redux';
import store from '@/redux/store';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Navbar, Footer } from '@/components';

const TopProgressBar = dynamic(
  () => import('@/components/General/TopProgressBar'),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <TopProgressBar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
