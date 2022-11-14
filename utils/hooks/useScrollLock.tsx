import { useLayoutEffect } from "react";

export default function useLockBodyScroll(value: string) {
  useLayoutEffect((): any => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = value;
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}
