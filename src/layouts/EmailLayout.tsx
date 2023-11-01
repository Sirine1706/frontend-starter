import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const Layout: React.FC = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-boxdark-2 dark:text-bodydark">
      <main className="min-w-full min-h-full">{children}</main>
    </div>
  );
};

export default Layout;
