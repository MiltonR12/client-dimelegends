import { QueryClient } from '@tanstack/react-query'

export const querClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
})