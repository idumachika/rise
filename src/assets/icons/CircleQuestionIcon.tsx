import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';
const CircleQuestionIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#71879C" fillOpacity={0.1} rx={12} />
    <Path
      fill="#0898A0"
      d="M12.073 15.472c.49 0 .723-.339.723-.793v-.42c.017-1.158.418-1.666 1.8-2.62 1.498-1.034 2.353-2.13 2.353-3.708C16.95 5.489 14.962 4 12.448 4 10.54 4 8.9 4.972 8.223 6.612 8.063 6.995 8 7.36 8 7.655c0 .41.232.686.669.686.365 0 .606-.214.713-.57.392-1.676 1.542-2.434 3.021-2.434 1.72 0 3.076 1.016 3.076 2.594 0 1.203-.722 1.925-1.9 2.763-1.38.98-2.245 1.917-2.245 3.387v.615c0 .455.25.776.74.776Zm.01 4.528a1.056 1.056 0 1 0 .01-2.114 1.056 1.056 0 0 0-.01 2.114Z"
    />
  </Svg>
);
export default CircleQuestionIcon;
