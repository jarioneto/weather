import * as React from 'react';
import { IconProps } from 'types';

export const Wind = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
  return (
    <svg
      width="45"
      height="30"
      viewBox="0 0 45 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <defs>
        <clipPath id="wind-clip-path">
          <path
            d="M26.471,8.994a1.128,1.128,0,0,1,0-2.251l5.294,0A2.187,2.187,0,0,0,33.883,4.5a2,2,0,0,0-1.875-2.243A1.094,1.094,0,0,1,30.95,1.127,1.1,1.1,0,0,1,32.007,0C34.329,0,36,1.982,36,4.5A4.377,4.377,0,0,1,31.765,9ZM1.058.008,11.643,0a1.129,1.129,0,0,1,0,2.253L1.058,2.259A1.128,1.128,0,0,1,1.058.008Z"
            transform="translate(-0.184 -0.123)"
            fill="none"
          />
        </clipPath>
        <clipPath id="wind-clip-path-2">
          <path
            d="M24.259,30a1.072,1.072,0,0,1,0-2.143h.291a3.013,3.013,0,0,0,2.75-3.215,3.013,3.013,0,0,0-2.75-3.215h-13a1.072,1.072,0,0,1,0-2.143h13a5.121,5.121,0,0,1,4.85,5.357A5.121,5.121,0,0,1,24.55,30Zm12-2.143a1.073,1.073,0,0,1,0-2.145H37.8a2.143,2.143,0,0,0,0-4.285H32.55a1.072,1.072,0,0,1,0-2.143H37.8a4.287,4.287,0,0,1,0,8.572ZM4.2,21.428a4.286,4.286,0,0,1,0-8.57H26.085a5.358,5.358,0,1,0,0-10.715h-.5a1.061,1.061,0,0,1-1.049-1.07A1.061,1.061,0,0,1,25.586,0h.5a7.5,7.5,0,1,1,0,15H4.2a2.143,2.143,0,0,0,0,4.285H6.059a1.072,1.072,0,0,1,0,2.143Z"
            transform="translate(0 0.306)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="winds" transform="translate(-673 -377.306)">
        <g transform="translate(673 377)">
          <g transform="translate(9.184 6.429)">
            <g transform="translate(0 0)" clipPath="url(#wind-clip-path)">
              <rect
                width="57"
                height="30"
                transform="translate(-11.184 -11.123)"
                fill="#e6794b"
              />
            </g>
          </g>
          <g transform="translate(0)">
            <g clipPath="url(#wind-clip-path-2)">
              <rect
                width="62"
                height="50"
                transform="translate(-10 -9.694)"
                fill="#1e1e1e"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
});

Wind.displayName = 'Wind';

export default Wind;
