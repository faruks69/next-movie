import Link from 'next/link';

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

const NavbarLink = () => {
  return (
    <div
      className="flex h-full w-full
    sm:fixed sm:inset-x-0 sm:bottom-0 sm:h-20 sm:bg-stone-700 sm:shadow-[0_7px_29px_0_rgba(0,0,0,0.3)]"
    >
      <ul className="flex justify-between w-full h-full">
        {headerNav.map((item) => (
          <Link key={item.path} href={item.path}>
            <a className="flex-center-center w-[33%] text-xl font-semibold h-full">
              {item.display}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLink;
