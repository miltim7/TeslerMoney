'use client'

import Image from 'next/image';

export default function Button({ 
  children, 
  variant = 'primary', // primary или secondary
  icon, 
  onClick, 
  className = '' 
}) {
  return (
    <button
      className={`${variant} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <Image src={icon} alt="" width={20} height={20} />}
    </button>
  );
}
