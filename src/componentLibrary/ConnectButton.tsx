/**
 *
 * An example button of what would in the future become part of our design system and component library
 *
 */
import { composeRenderProps, Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

export type ButtonProps = RACButtonProps & {
  variant?: 'primary' | 'secondary' | 'destructive' | 'icon';
};

/**
 * Create the different button variants
 */
let button = tv({
  base: `cursor-default rounded-lg border border-black/10 px-5 py-2 text-center text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:border-white/10 dark:shadow-none`,
  variants: {
    variant: {
      primary: 'pressed:bg-blue-800 bg-blue-600 text-white hover:bg-blue-700',
      secondary: `dark:pressed:bg-zinc-400 pressed:bg-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-500`,
      destructive: 'pressed:bg-red-900 bg-red-700 text-white hover:bg-red-800',
      icon: `dark:pressed:bg-white/20 pressed:bg-black/10 flex items-center justify-center border-0 p-1 text-gray-600 hover:bg-black/[5%] disabled:bg-transparent dark:text-zinc-400 dark:hover:bg-white/10`,
    },
    isDisabled: {
      true: `border-black/5 bg-gray-100 text-gray-300 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-600 forced-colors:text-[GrayText]`,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export function ConnectButton(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className }),
      )}
    />
  );
}
