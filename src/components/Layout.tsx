import React from 'react';
interface Props {
  children: React.ReactNode;
  style: string;
}

function Layout({ children, style }: Props) {
  return (
    <div className={`w-full h-full inline-block z-0 dark:bg-black p-32 lg:p-16 xl:24  md:p-12 sm:p-8 ${style}`}>{children}</div>
  );
}

export default Layout;
