import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface MergableClassName {
  /**
   * Whether or not a provided `className` attribute will merge with the default className - or if it should overwrite.
   * Default behaviour is to merge. Set to `false` to completely customize the style.
   */
  mergeClassName?: boolean;
}

/**
 * A convenient set of types for exposing react html attributes to a component without costing tens upon tens of keystrokes.
 * Useful for most types of ui components.
 */
export type HTMLProps<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type InputProps<T> = DetailedHTMLProps<InputHTMLAttributes<T>, T>;
