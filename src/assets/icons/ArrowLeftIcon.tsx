import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width="13" height="12" fill="none" {...props}>
    <Path
      stroke={props.stroke ?? '#B80074'}
      strokeWidth={2}
      d="M7.133 1 2 6m0 0 5.133 5M2 6h11"
    />
  </Svg>
);
export default ArrowLeftIcon;
