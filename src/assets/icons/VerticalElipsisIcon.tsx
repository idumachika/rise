import * as React from 'react';
import Svg, {Circle, SvgProps} from 'react-native-svg';
const VerticalElipsisIcon = (props: SvgProps) => (
  <Svg width="22" height="22" fill="none" {...props}>
    <Circle cx={11} cy={3.418} r={1.691} fill="#fff" />
    <Circle cx={11} cy={11} r={1.691} fill="#fff" />
    <Circle cx={11} cy={18.582} r={1.691} fill="#fff" />
  </Svg>
);
export default VerticalElipsisIcon;
