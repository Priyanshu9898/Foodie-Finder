import React, { FC } from "react";
import { UserButton } from "@clerk/nextjs";

const UserButtonNavbar: FC = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserButtonNavbar;
