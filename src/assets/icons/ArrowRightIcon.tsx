import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const ArrowRightIcon = (props: SvgProps) => (
  <Svg width="15" height="16" fill="none" {...props}>
    <Path
      stroke={props.stroke ?? '#fff'}
      strokeWidth={1.5}
      d="M14.664 8H1.336m0 0L8 1.336M1.336 8 8 14.664"
    />
  </Svg>
);
export default ArrowRightIcon;
