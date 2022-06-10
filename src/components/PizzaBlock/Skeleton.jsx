import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={310}
    height={447}
    viewBox="0 0 280 447"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-8" y="246" rx="5" ry="5" width="294" height="15" />
    <rect x="-24" y="272" rx="5" ry="5" width="310" height="85" />
    <rect x="158" y="377" rx="12" ry="12" width="116" height="45" />
    <rect x="2" y="377" rx="10" ry="10" width="104" height="45" />
    <circle cx="135" cy="125" r="110" />
  </ContentLoader>
);

export default Skeleton;
