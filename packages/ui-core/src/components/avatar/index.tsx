import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';

interface AvatarProps extends RadixAvatar.AvatarImageProps {
  fallback?: React.ReactNode;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, className, ...props }) => {
  return (
    <RadixAvatar.Root className={`inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}>
      <RadixAvatar.Image src={src} alt={alt} className="h-full w-full object-cover" {...props} />
      {fallback && <RadixAvatar.Fallback>{fallback}</RadixAvatar.Fallback>}
    </RadixAvatar.Root>
  );
};

export default Avatar;