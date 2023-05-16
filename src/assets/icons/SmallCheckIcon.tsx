import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const SmallCheckIcon = (props: SvgProps) => (
  <Svg width="8" height="5" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1 2.5 2 2 4-4"
    />
  </Svg>
);
export default SmallCheckIcon;
