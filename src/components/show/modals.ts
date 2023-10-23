import Sweet from 'sweetalert2'

export const modalError = (text: string) => {
  return Sweet.fire({
    icon: 'error',
    title: 'Oops...',
    text: text,
  })
}