import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const LossIcon = (props: SvgProps) => (
  <Svg width="12" height="12" fill="none" {...props}>
    <Path
      stroke="#EB5757"
      strokeWidth={1.5}
      d="M1.358 10.583 10.642 1.3m0 0h-8.2m8.2 0v8.2"
    />
  </Svg>
);
export default LossIcon;
