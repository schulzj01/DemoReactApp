import { Link as AriaLink, LinkProps as AriaLinkProps, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

type LinkProps = {
  variant?: 'primary' | 'secondary'
} & AriaLinkProps;

const styles = tv({
  base: 'underline disabled:no-underline disabled:cursor-default forced-colors:disabled:text-[GrayText] transition rounded',
  variants: {
    variant: {
      primary: `
        text-blue-600 underline decoration-blue-600/60 dark:text-blue-500 dark:decoration-blue-500/60 dark:hover:decoration-blue-500 hover:decoration-blue-600
      `,
      secondary: `
        text-gray-700 underline decoration-gray-700/50 dark:text-zinc-300 dark:decoration-zinc-300/70 dark:hover:decoration-zinc-300 hover:decoration-gray-700
      `,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export function ConnectLink(props: LinkProps) {
  return <AriaLink {...props} className={composeRenderProps(props.className, (className, renderProps) => styles({ ...renderProps, className, variant: props.variant }))} />;
}
