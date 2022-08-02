import React from 'react';
import { ComponentCSSProp, styled } from 'styles';

const BUTTON_TAG = 'button';

const StyledButton = styled(BUTTON_TAG, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  appearance: 'none',
  userSelect: 'none',
  outline: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  background: '$secondary',
  color: '$secondaryContrast',
  borderRadius: '$large',
  padding: '$3 $6',
  fontSize: '$medium',
  letterSpacing: '$wide',

  transition: `
    background 150ms ease,
      box-shadow 150ms ease-in-out,
      color 150ms ease
  `,

  '&:disabled, &[disabled], &[aria-disabled=true]': {
    background: '$disabled',
    color: '$neutralBody',
    pointerEvents: 'none',
    cursor: 'auto'
  },

  '&::before, &::after': {
    boxSizing: 'border-box'
  },

  '&:active': {
    opacity: '0.8'
  },

  '&:hover': {
    backgroundColor: '$secondaryDark'
  },

  '&:focus': {
    boxShadow: '$outline'
  }
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof StyledButton> & {
  isLoading?: boolean;
  loadingText?: string;
};

type ButtonElement = React.ElementRef<typeof StyledButton>;
type ButtonOwnProps = ComponentCSSProp & ButtonProps;

export const Button = React.forwardRef<ButtonElement, ButtonOwnProps>(
  ({ children, disabled, isLoading, loadingText, ...props }, forwardRef) => {
    const isDisabled = disabled || isLoading;

    return (
      <StyledButton
        ref={forwardRef}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
        css={props.css}
      >
        {isLoading ? <>{loadingText ?? children}</> : children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
