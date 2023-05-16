import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const HomeIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      // fill="#41BCC4"
      fill={props.fill ?? '#94A1AD'}
      fillRule="evenodd"
      d="M13.532 19.127v-3.042c0-1.575-1.44-2.852-3.015-2.852h-.435c-1.575 0-3.015 1.277-3.015 2.852v3.042c0 .2.034.392.098.57H5.736a2.852 2.852 0 0 1-2.852-2.851V8.12L1.548 9.289a.57.57 0 0 1-.751-.859L9.924.444a.57.57 0 0 1 .751 0l9.128 7.986a.57.57 0 0 1-.752.859l-1.335-1.17v8.727a2.852 2.852 0 0 1-2.853 2.852h-1.428a1.71 1.71 0 0 0 .097-.57Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeIcon;
