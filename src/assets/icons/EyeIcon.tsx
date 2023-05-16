import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const EyeIcon = (props: SvgProps) => (
  <Svg fill="none" {...props} width={22} height={15}>
    <Path
      fill="#0898A0"
      d="M11 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10ZM11 .5C6 .5 1.73 3.61 0 8c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 3.61 16 .5 11 .5Z"
    />
  </Svg>
);
export default EyeIcon;
