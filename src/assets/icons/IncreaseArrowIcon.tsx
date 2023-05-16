import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IncreaseArrowIcon = (props: SvgProps) => (
  <Svg width="7" height="8" fill="none" {...props}>
    <Path
      stroke="#27BF41"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5 1h6m0 0v6m0-6-6 6"
    />
  </Svg>
);
export default IncreaseArrowIcon;
