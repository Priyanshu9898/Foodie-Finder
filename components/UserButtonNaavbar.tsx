import React, { FC } from "react";
import { UserButton } from "@clerk/nextjs";

const UserButtonNaavbar: FC = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserButtonNaavbar;
