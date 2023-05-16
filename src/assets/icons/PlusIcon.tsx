import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const PlusIcon = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path fill="#fff" d="M.5.5h21v21H.5z" />
    <Path
      stroke="#0898A0"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.132 11h13.736M11 17.868V4.132"
    />
  </Svg>
);
export default PlusIcon;
