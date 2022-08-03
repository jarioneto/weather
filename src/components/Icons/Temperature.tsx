import * as React from 'react';
import { IconProps } from 'types';

export const Temperature = React.forwardRef<SVGSVGElement, IconProps>(
  (props, forwardedRef) => {
    return (
      <svg
        width="44"
        height="33.342"
        viewBox="0 0 44 33.342"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <defs>
          <clipPath id="temperature-clip-path">
            <path
              d="M13.607,29H1.048a1.036,1.036,0,1,1,0-2.071H11.8a12.03,12.03,0,0,1-1.322-5.179,11.524,11.524,0,1,1,21.772,5.179h10.7a1.036,1.036,0,1,1,0,2.071h-12.6a1,1,0,0,1-1.018-1.007v-.075a1.038,1.038,0,0,1,.315-.718,9.568,9.568,0,0,0,1.78-5.451,9.429,9.429,0,0,0-18.857,0,10.574,10.574,0,0,0,1.912,5.628,1.027,1.027,0,0,1-.272,1.439,1.055,1.055,0,0,1-.6.183Zm25.155-6.214a1.036,1.036,0,1,1,0-2.071h4.19a1.036,1.036,0,1,1,0,2.071Zm-37.714,0a1.036,1.036,0,1,1,0-2.071h4.19a1.036,1.036,0,1,1,0,2.071ZM9.417,10.832,6.454,7.9a1.041,1.041,0,1,1,1.48-1.463L10.9,9.366a1.046,1.046,0,0,1-.75,1.788A1.027,1.027,0,0,1,9.417,10.832Zm23.628-.06a1.023,1.023,0,0,1,0-1.464L36.007,6.38a1.057,1.057,0,0,1,1.482,0,1.029,1.029,0,0,1,0,1.464l-2.964,2.929a1.054,1.054,0,0,1-1.48,0ZM20.953,5.177V1.035a1.048,1.048,0,0,1,2.1,0V5.177a1.048,1.048,0,0,1-2.1,0Z"
              fill="none"
            />
          </clipPath>
          <clipPath id="temperature-clip-path-2">
            <path
              d="M3.61,11.462V3.836L1.83,5.892A1.042,1.042,0,0,1,.255,4.528L3.863.361A1.043,1.043,0,0,1,5.334.254a1.019,1.019,0,0,1,.118.12l3.6,4.154A1.042,1.042,0,0,1,7.474,5.892L5.694,3.836v7.626a1.042,1.042,0,0,1-2.084,0Z"
              fill="none"
            />
          </clipPath>
        </defs>
        <g id="temp-max" transform="translate(-320 -464)">
          <g transform="translate(320 464)">
            <g clipPath="url(#temperature-clip-path)">
              <rect
                width="64"
                height="50"
                transform="translate(-10 -10)"
                fill="#1e1e1e"
              />
            </g>
          </g>
          <g transform="translate(337.23 484.839)">
            <g clipPath="url(#temperature-clip-path-2)">
              <rect
                width="30.143"
                height="33.343"
                transform="translate(-10.42 -10.42)"
                fill="#e6794b"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
);

Temperature.displayName = 'Temperature';

export default Temperature;
