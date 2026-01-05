import React from "react";
import Image from "next/image";

const Logo = ({ width = 50 }: { width: number }) => {
  return <Image src="/logo.png" alt="BMW Logo" width={width} height={width} />;
};

export default Logo;
