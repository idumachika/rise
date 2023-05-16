import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const GainIcon = (props: SvgProps) => (
  <Svg width="12" height="12" fill="none" {...props}>
    <Path
      stroke="#27BF41"
      strokeWidth={1.5}
      d="m10.642 1.3-9.284 9.283m0 0h8.2m-8.2 0v-8.2"
    />
  </Svg>
);
export default GainIcon;
