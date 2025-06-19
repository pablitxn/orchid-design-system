import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Badge as BadgeCore } from '@orchid-design-system/primitives';
import { Slot } from "@radix-ui/react-slot"

import { cn } from "../../../../lib/utils.ts"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-base w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-main text-main-foreground",
        neutral: "bg-secondary-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          data-slot="badge"
          className={cn(badgeVariants({ variant }), className)}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <BadgeCore
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {children}
      </BadgeCore>
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
