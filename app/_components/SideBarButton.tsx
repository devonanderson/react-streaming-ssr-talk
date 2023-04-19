'use client';

import { useRef } from "react";

/**
 * Button used to illustrate selective hydration
 * @param children - The button's children 
 * @returns {JSX.Element}
 */
export default function SideBarButton({ children }: { children: any }): JSX.Element {
  const spanRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    if (spanRef.current && !spanRef.current.classList.contains('translate-x-[-100%]')) {
      spanRef.current.classList.add('translate-x-[-100%]');

      setTimeout(() => spanRef.current?.classList.remove('translate-x-[-100%]'), 2000);
    }
  }
  
  return (
    <button onClick={() => handleButtonClick()} className="flex flex items-center overflow-hidden relative w-full h-8">
        <span ref={spanRef} className="flex transition-transform">
          {children}
          <span className="flex translate-x-full pl-1 whitespace-nowrap">I&apos;ve been clicked!</span>
        </span>
    </button>
  );
}