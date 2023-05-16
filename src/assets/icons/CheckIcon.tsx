import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const CheckIcon = (props: SvgProps) => (
  <Svg width={35} height={30} fill="none" {...props}>
    <Path
      stroke="#0898A0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m2.365 14.663 10.133 8.707L36.636 2.63"
    />
  </Svg>
);
export default CheckIcon;
