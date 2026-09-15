import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition-opacity duration-150 ease-out disabled:opacity-40 disabled:pointer-events-none min-h-11 px-4 text-sm",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg rounded-sm hover:opacity-90",
        ghost: "bg-transparent text-fg rounded-sm hover:bg-raised",
        outline: "bg-transparent text-fg rounded-sm shadow-border hover:shadow-border-hover",
        danger: "bg-danger text-bg rounded-sm hover:opacity-90",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: Props) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
