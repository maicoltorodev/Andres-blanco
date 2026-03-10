"use client"

import Image from "next/image"

interface LogoABProps {
  className?: string
  size?: number
  color?: string
}

export function LogoAB({ className = "", size = 120 }: LogoABProps) {
  return (
    <div className={className} style={{ width: size, display: 'flex', alignItems: 'center' }}>
      <Image
        src="/logoab.png"
        alt="Logo AB"
        width={size}
        height={size * 0.6}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  )
}

// Version más estilizada que replica mejor el logo original
export function LogoABStylized({ className = "", size = 200 }: LogoABProps) {
  return (
    <div className={className} style={{ width: size, display: 'flex', alignItems: 'center' }}>
      <Image
        src="/logoab.png"
        alt="Logo AB Stylized"
        width={size}
        height={size * 0.45}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  )
}

// Logo final más fiel al original
export function LogoABFinal({ className = "", size = 200 }: LogoABProps) {
  return (
    <div className={className} style={{ width: size, display: 'flex', alignItems: 'center' }}>
      <Image
        src="/logoab.png"
        alt="Logo AB Final"
        width={size}
        height={size * 0.42}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  )
}
