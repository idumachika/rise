import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const RightChevronIcon = (props: SvgProps) => (
  <Svg width="7" height="12" fill="none" {...props}>
    <Path
      stroke="#71879C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.501 1.5 4 4.5-4 4.5"
    />
  </Svg>
);
export default RightChevronIcon;
