import Sweet from "sweetalert2";

type Props = {
  title: string;
  placeholder?: string;
  buttonAcept: string;
  buttonCancel?: string;
  onSuccess: Function;
};

export const showDialogInput = ({
  buttonAcept,
  onSuccess,
  placeholder,
  title,
  buttonCancel,
}: Props) => {
  Sweet.fire({
    title,
    input: "text",
    preConfirm: (value) => {
      if (!value) {
        Sweet.showValidationMessage("Colocar un enlace");
      }
    },
    inputPlaceholder: placeholder || "",
    color: "#fff",
    background: "#000",
    showCancelButton: true,
    confirmButtonText: buttonAcept,
    confirmButtonColor: "#06B6D4",
    cancelButtonText: buttonCancel || "Cancelar",
    reverseButtons: true,
    inputAutoTrim: true,
  })
    .then((result) => {
      if (result.isConfirmed) {
        onSuccess(result.value);
      }
    })
    .catch(() => {
      alert("Error en el cuadro de dialogo");
    });
};
