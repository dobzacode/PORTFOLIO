import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

const buttonVariants = cva('whitespace-nowrap inline-flex items-center justify-center', {
  variants: {
    size: {
      small: 'py-small px-sub-large body leading-body font-medium',
      medium: 'py-sub-medium px-[4rem] sub-heading',
      large: 'py-sub-large px-large heading--sub-large'
    },
    intent: {
      primary:
        'bg-primary40 text-primary1 border-primary80 dark:border-primary1  dark:text-primary1',
      secondary: 'bg-secondary40 text-secondary1 border-secondary80',
      tertiary: 'bg-tertiary40 text-tertiary1 border-tertiary80',
      success: 'bg-success40 text-success1 border-success80',
      error: 'bg-error40 text-error1 border-error80 dark:border-error1  dark:text-error1',
      warning: 'bg-warning40 text-warning1 border-warning 80',
      info: 'bg-info40 text-info1 border-info80',
      neutral: 'bg-neutral40 text-neutral1 border-neutral80',
      pastelPrimary:
        'bg-primary10 text-primary80 border-primary80 dark:border-primary1 dark:bg-primary30 dark:text-primary1',
      pastelSecondary: 'bg-secondary10 text-secondary80 border-secondary80',
      pastelTertiary: 'bg-tertiary10 text-tertiary80 border-tertiary80',
      pastelSuccess: 'bg-success10 text-success80 border-success80',
      pastelError: 'bg-error10 text-error80 border-error80',
      pastelWarning: 'bg-warning10 text-warning80 border-warning 80',
      pastelInfo: 'bg-info10 text-info80 border-info80',
      pastelNeutral: 'bg-neutral10 text-neutral80 border-neutral80'
    },
    modifier: {
      brutalism: 'border-b-4 border-l border-r-4 border-t',
      clay: 'shadow-primary-clay bg-primary1 text-primary80'
    },
    transparent: {
      true: 'border-current border-2 bg-transparent  text-current'
    },
    shadow: {
      small: '',
      medium: '',
      high: ''
    },
    rounded: {
      small: 'rounded-extra-small',
      medium: 'rounded-small',
      large: 'rounded-medium',
      full: 'rounded-full'
    },
    hover: {
      true: 'duration-fast hover:scale-[102%]'
    }
  },

  compoundVariants: [
    {
      intent: ['primary', 'pastelPrimary'],
      hover: true,
      className: ' hover:shadow-primary-medium dark:hover:shadow-primary-medium-light'
    },
    {
      intent: 'secondary',
      hover: true,
      className: 'hover:shadow-secondary-medium'
    },
    {
      intent: 'tertiary',
      hover: true,
      className: 'hover:shadow-tertiary-medium'
    },
    {
      intent: 'info',
      hover: true,
      className: 'hover:shadow-info-medium'
    },
    {
      intent: 'success',
      hover: true,
      className: 'hover:shadow-success-medium'
    },
    {
      intent: 'error',
      hover: true,
      className: 'hover:shadow-error-medium dark:hover:shadow-error-medium-light'
    },
    {
      intent: 'warning',
      hover: true,
      className: 'hover:shadow-warning-medium'
    },
    {
      intent: 'neutral',
      hover: true,
      className: 'hover:shadow-neutral-medium'
    },
    {
      intent: ['primary', 'pastelPrimary'],
      shadow: 'medium',
      className: ' shadow-primary-medium dark:shadow-primary-medium-light'
    },
    {
      intent: ['secondary', 'pastelSecondary'],
      shadow: 'medium',
      className: 'shadow-secondary-medium'
    },
    {
      intent: ['tertiary', 'pastelTertiary'],
      shadow: 'medium',
      className: 'shadow-tertiary-medium'
    },
    {
      intent: 'info',
      shadow: 'medium',
      className: 'shadow-info-medium'
    },
    {
      intent: 'success',
      shadow: 'medium',
      className: 'shadow-success-medium'
    },
    {
      intent: 'error',
      shadow: 'medium',
      className: 'shadow-error-medium dark:shadow-error-medium-light'
    },
    {
      intent: 'warning',
      shadow: 'medium',
      className: 'shadow-warning-medium'
    },
    {
      intent: 'neutral',
      shadow: 'medium',
      className: 'shadow-neutral-medium'
    },
    { intent: 'primary', transparent: true, className: 'text-primary80' },
    {
      intent: 'pastelPrimary',
      transparent: true,
      className: 'dark:bg-primary90'
    }
  ]
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color,
      size,
      modifier,
      rounded,
      hover,
      transparent,
      intent,
      children,
      shadow,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            className,
            intent,
            size,
            rounded,
            hover,
            transparent,
            modifier,
            shadow
          })
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
export { buttonVariants };
