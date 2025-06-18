import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';

export interface AvatarProps extends RadixAvatar.AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export interface AvatarImageProps extends RadixAvatar.AvatarImageProps {
  className?: string;
}

export interface AvatarFallbackProps extends RadixAvatar.AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  AvatarProps
>(({ children, className, ...props }, ref) => {
  return (
    <RadixAvatar.Root 
      ref={ref}
      className={`inline-flex items-center justify-center rounded-full overflow-hidden ${className || ''}`}
      {...props}
    >
      {children}
    </RadixAvatar.Root>
  );
});
AvatarRoot.displayName = 'Avatar';

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <RadixAvatar.Image 
    ref={ref}
    className={`h-full w-full object-cover ${className || ''}`} 
    {...props} 
  />
));
AvatarImage.displayName = 'Avatar.Image';

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  AvatarFallbackProps
>(({ children, className, ...props }, ref) => (
  <RadixAvatar.Fallback 
    ref={ref}
    className={`flex h-full w-full items-center justify-center ${className || ''}`}
    {...props}
  >
    {children}
  </RadixAvatar.Fallback>
));
AvatarFallback.displayName = 'Avatar.Fallback';

// Create compound component
const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export default Avatar;