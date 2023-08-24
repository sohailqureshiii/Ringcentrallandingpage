import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import AdvertmediaLogo from "../../public/amcodeadvertlogo.jpg";
import Link from "next/link";
const myFont = localFont({ src: "../../Fonts/NimbusSanL-Reg.otf" });
export const Navigationbar = () => {
  return (
    <div style={myFont.style} className="main-flx-of-navigation-bar">
      <div>
        <Link href="/">
          <Image
            src={AdvertmediaLogo}
            height={70}
            className="fegtrhyugytdrsa"
          />
        </Link>
      </div>
      <div>
        <Link href="/contactus">
          <button
            style={myFont.style}
            className="cta-button-of-contact-sus-ringcenral"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
