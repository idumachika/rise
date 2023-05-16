import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const ArrowIcon = (props: SvgProps) => (
  <Svg width="13" height="12" fill="none" {...props}>
    <Path
      stroke={props.stroke ?? '#FE7122'}
      strokeWidth={2}
      d="M5.867 1 11 6m0 0-5.133 5M11 6H0"
    />
  </Svg>
);
export default ArrowIcon;
