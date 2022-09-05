import { useRouter } from 'next/router';
import { Button } from '@/components';

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div
        className="
      relative pb-[100vh] pl-8 text-center mb-[-16px]
      after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[50px] after:bg-gradient-to-t from-body to-black/[0]
      "
        style={{ backgroundImage: 'url(/footer-bg.jpg)' }}
      >
        <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-3xl font-bold text-main mb-10">404 Error</h2>
          <p className="text-xl font-semibold mb-10">
            Sorry, An unexpected error has occurred.
          </p>
          <Button onClick={() => router.push('/')}>Go Back Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
