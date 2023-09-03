"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserState } from '@/state/user';

function AuthenticatedRoute({ children }: {children: React.ReactNode}) {
  const { isAllow } = useUserState(); 
  const router = useRouter();

  useEffect(() => {
    if (!isAllow) {
      router.push('/login');
    }
  }, [isAllow, router]);

  return isAllow ? children : null;
}

export default AuthenticatedRoute;
