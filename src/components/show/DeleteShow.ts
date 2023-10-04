import Swal from "sweetalert2";

export const showDelete = ({ onSuccess }: { onSuccess: Function }) => {
  return Swal.fire({
    title: "¿Estas seguro de eliminar?",
    background: "#000",
    color: "#fff",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#1C1C1C",
    confirmButtonText: "Eliminar",
    confirmButtonColor: "#d33",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      onSuccess();
    }
  });
};
