"use client"

import * as React from "react"
import { AlertDialog } from "@orchid-design-system/ui-core"

import {buttonVariants} from "@/components/button/neobrutalism"
import {cn} from "@/lib/utils"

const AlertDialogRoot = React.forwardRef<
  React.ElementRef<typeof AlertDialog>,
  React.ComponentProps<typeof AlertDialog>
>(({ ...props }, ref) => {
  return <AlertDialog ref={ref} data-slot="alert-dialog" {...props} />
})
AlertDialogRoot.displayName = "AlertDialogRoot"

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof AlertDialog.Trigger>,
  React.ComponentProps<typeof AlertDialog.Trigger>
>(({ ...props }, ref) => {
  return (
    <AlertDialog.Trigger ref={ref} data-slot="alert-dialog-trigger" {...props} />
  )
})
AlertDialogTrigger.displayName = "AlertDialogTrigger"

const AlertDialogPortal = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}
AlertDialogPortal.displayName = "AlertDialogPortal"

const AlertDialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  )
})
AlertDialogOverlay.displayName = "AlertDialogOverlay"

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialog.Content>,
  React.ComponentProps<typeof AlertDialog.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <AlertDialog.Content
      ref={ref}
      data-slot="alert-dialog-content"
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-base border-2 border-border p-6 shadow-shadow duration-200 sm:max-w-lg",
        className,
      )}
      {...props}
    >
      <AlertDialogOverlay/>
      {children}
    </AlertDialog.Content>
  )
})
AlertDialogContent.displayName = "AlertDialogContent"

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
})
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  )
})
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialog.Title>,
  React.ComponentProps<typeof AlertDialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <AlertDialog.Title
      ref={ref}
      data-slot="alert-dialog-title"
      className={cn("text-lg font-heading", className)}
      {...props}
    />
  )
})
AlertDialogTitle.displayName = "AlertDialogTitle"

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialog.Description>,
  React.ComponentProps<typeof AlertDialog.Description>
>(({ className, ...props }, ref) => {
  return (
    <AlertDialog.Description
      ref={ref}
      data-slot="alert-dialog-description"
      className={cn("text-sm font-base text-foreground", className)}
      {...props}
    />
  )
})
AlertDialogDescription.displayName = "AlertDialogDescription"

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialog.Action>,
  React.ComponentProps<typeof AlertDialog.Action>
>(({ className, ...props }, ref) => {
  return (
    <AlertDialog.Action
      ref={ref}
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
})
AlertDialogAction.displayName = "AlertDialogAction"

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialog.Cancel>,
  React.ComponentProps<typeof AlertDialog.Cancel>
>(({ className, ...props }, ref) => {
  return (
    <AlertDialog.Cancel
      ref={ref}
      className={cn(buttonVariants({variant: "neutral"}), className)}
      {...props}
    />
  )
})
AlertDialogCancel.displayName = "AlertDialogCancel"

export {
  AlertDialogRoot as AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}