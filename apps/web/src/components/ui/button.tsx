import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@olw-web-dev/ui/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors w-fit",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-primary text-primary hover:bg-primary/5",
        ghost: "text-primary hover:bg-primary/5",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-md",
        md: "px-6 py-3 text-base rounded-md",
        lg: "px-8 py-4 text-lg rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Button({ children, className, variant, size, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
        {children}
      </Link>
    );
  }

  return <button className={cn(buttonVariants({ variant, size, className }))}>{children}</button>;
}

export { buttonVariants };
