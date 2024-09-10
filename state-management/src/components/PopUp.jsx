import { useRef, useImperativeHandle, forwardRef } from "react";

const PopUp = forwardRef(function PopUp({ total }, ref) {
  const modal = useRef();
  useImperativeHandle(ref, () => {
    return {
      openModal() {
        modal.current.showModal();
      },
    };
  });

  return (
    <>
      <dialog ref={modal}>
        <p>Total Selected Products: {total}</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default PopUp;
