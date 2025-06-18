import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"
import { Alert } from '@orchid-design-system/ui-core';

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-base border-2 border-border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current shadow-shadow",
  {
    variants: {
      variant: {
        default: "bg-main text-main-foreground",
        destructive: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Alert> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <Alert
      ref={ref}
      data-slot="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
})
AlertRoot.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Alert.Title>
>(({ className, ...props }, ref) => {
  return (
    <Alert.Title
      ref={ref}
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-heading tracking-tight",
        className,
      )}
      {...props}
    />
  )
})
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Alert.Description>
>(({ className, ...props }, ref) => {
  return (
    <Alert.Description
      ref={ref}
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm font-base [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  )
})
AlertDescription.displayName = 'AlertDescription'

export { AlertRoot as Alert, AlertTitle, AlertDescription }
