"use client"

import 'nprogress/nprogress.css';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
