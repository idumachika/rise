import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';
const BackIcon = (props: SvgProps) => (
  <Svg width="37" height="37" fill="none" {...props}>
    <Rect
      width={36}
      height={36}
      x={0.979}
      y={0.173}
      fill="#71879C"
      fillOpacity={0.1}
      rx={18}
    />
    <Path
      stroke="#0898A0"
      strokeWidth={2}
      d="M25.642 18.173H12.315m0 0 6.664-6.664m-6.664 6.664 6.664 6.664"
    />
  </Svg>
);
export default BackIcon;
