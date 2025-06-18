import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Alert } from '@orchid-design-system/ui-core';

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Alert> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <Alert
    ref={ref}
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
AlertRoot.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof Alert.Title>
>(({ className, ...props }, ref) => (
  <Alert.Title
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Alert.Description>
>(({ className, ...props }, ref) => (
  <Alert.Description
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { AlertRoot as Alert, AlertTitle, AlertDescription }