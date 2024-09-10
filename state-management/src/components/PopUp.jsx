import { useRef, useImperativeHandle, forwardRef } from "react";
import { useContext } from "react";
import { CreateContext } from "../store/product-count-context";
const PopUp = forwardRef(function PopUp({ total }, ref) {
  const proCount = useContext(CreateContext);
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
        <p>Total Selected Products: {proCount.count}</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default PopUp;
