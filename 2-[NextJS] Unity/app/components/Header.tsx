import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md fixed">
        <div className="navbar-start">
          <Image
            src="/gementar_team_academy_logo.png"
            alt="alt"
            width={50}
            height={50}
          />
        </div>
        <div className="navbar-center">
          GementarTeam Academy
        </div>
        <div className="navbar-end">
        </div>
      </div>
    </div>
  );
};

export default Header;
