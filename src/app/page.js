'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      router.replace('/landing_page/registered');
    } else {
      router.replace('/landing_page/unregistered');
    }
  }, [router]);

  return null;
}
