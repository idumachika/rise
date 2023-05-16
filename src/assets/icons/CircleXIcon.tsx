import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';
const CircleXIcon = (props: SvgProps) => (
  <Svg width="36" height="37" fill="none" {...props}>
    <Rect
      width={36}
      height={36}
      y={0.663}
      fill="#71879C"
      fillOpacity={0.1}
      rx={18}
    />
    <Path
      stroke="#0898A0"
      strokeWidth={2}
      d="M23.006 23.669 12.994 13.658M12.994 23.669l10.012-10.011"
    />
  </Svg>
);
export default CircleXIcon;
