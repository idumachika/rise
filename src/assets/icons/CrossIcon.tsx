import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const CrossIcon = (props: SvgProps) => (
  <Svg width="21" height="22" fill="none" {...props}>
    <Path
      stroke="#0898A0"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3.632 11h13.736M10.5 17.868V4.132"
    />
  </Svg>
);
export default CrossIcon;
