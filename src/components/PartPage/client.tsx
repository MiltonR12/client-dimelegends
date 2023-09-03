"use client"
import { QueryClientProvider } from '@tanstack/react-query'
import { querClient } from '@/lib/queryClient'

function Client({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={querClient} >
      {children}
    </QueryClientProvider>
  )
}

export default Client