import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';
const CirclePlusIcon = (props: SvgProps) => (
  <Svg width="43" height="44" fill="none" {...props}>
    <Rect
      width={42.64}
      height={42.64}
      x={0.18}
      y={0.709}
      fill="#40BBC3"
      fillOpacity={0.15}
      rx={21.32}
    />
    <Path
      fill="#41BCC4"
      fillRule="evenodd"
      d="M22.22 22.749v7.917h-1.44v-7.917h-7.917v-1.44h7.917v-7.917h1.44v7.918h7.917v1.439h-7.918Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CirclePlusIcon;
