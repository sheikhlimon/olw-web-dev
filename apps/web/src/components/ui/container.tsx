import { cn } from "@olw-web-dev/ui/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto max-w-6xl px-8", className)}>{children}</div>;
}
