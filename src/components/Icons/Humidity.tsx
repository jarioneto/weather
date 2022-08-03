import * as React from 'react';
import { IconProps } from 'types';

export const Humidity = React.forwardRef<SVGSVGElement, IconProps>(
  (props, forwardedRef) => {
    return (
      <svg
        width="42.613"
        height="46.611"
        viewBox="0 0 42.613 46.611"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <defs>
          <clipPath id="humidity-clip-path">
            <path
              d="M0,24.453C0,19.8,4.2,11.831,12.6.364a.884.884,0,0,1,1.43,0c8.4,11.467,12.6,19.433,12.6,24.089A13.08,13.08,0,0,1,13.317,37.285,13.081,13.081,0,0,1,0,24.453Zm1.775,0A11.306,11.306,0,0,0,13.317,35.51a11.306,11.306,0,0,0,11.54-11.056c0-4.016-3.848-11.427-11.54-22.058C5.622,13.027,1.775,20.438,1.775,24.453Z"
              fill="none"
            />
          </clipPath>
          <clipPath id="humidity-clip-path-2">
            <path
              d="M19.531,20.419V16.868a.888.888,0,1,1,1.775,0v3.551a.888.888,0,1,1-1.775,0Zm14.533-4.581-2.51-2.51a.887.887,0,0,1,1.254-1.254l2.51,2.51a.887.887,0,1,1-1.254,1.254Zm-28.6-1.3,2.51-2.51a.888.888,0,1,1,1.256,1.254l-2.51,2.51a.868.868,0,0,1-.62.277A.9.9,0,0,1,5.469,14.533ZM38.174,1.775a.888.888,0,1,1,0-1.775h3.551a.888.888,0,1,1,0,1.775Zm-37.285,0A.888.888,0,1,1,.889,0H4.44a.888.888,0,1,1,0,1.775Z"
              fill="none"
            />
          </clipPath>
        </defs>
        <g id="humidity" transform="translate(-671 -371)">
          <g transform="translate(671 371)">
            <g transform="translate(8.074 0)">
              <g transform="translate(0)" clipPath="url(#humidity-clip-path)">
                <rect
                  width="44.388"
                  height="55.041"
                  transform="translate(-8.877 -8.878)"
                  fill="#1e1e1e"
                />
              </g>
            </g>
            <g transform="translate(0 25.304)">
              <g clipPath="url(#humidity-clip-path-2)">
                <rect
                  width="55.041"
                  height="37.286"
                  transform="translate(-7.101 -8.877)"
                  fill="#e6794b"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
);

Humidity.displayName = 'Humidity';

export default Humidity;
