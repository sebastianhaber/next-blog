import React from "react";

type Props = {};

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default AboutLayout;
