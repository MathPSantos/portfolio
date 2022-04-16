import Image from "next/image";
import {
  // Icons
  FiGlobe as GlobeIcon,
  FiMoon as MoonIcon,
} from "react-icons/fi";

interface OwnLeftArrowIconProps {
  width?: number;
  height?: number;
}

function OwnLeftArrowIcon({ width = 24, height = 24 }: OwnLeftArrowIconProps) {
  return (
    <Image
      src="/assets/left-arrow.svg"
      alt="Left Arrow"
      width={width}
      height={height}
    />
  );
}

export { GlobeIcon, MoonIcon, OwnLeftArrowIcon };
