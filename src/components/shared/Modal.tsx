import { ReactNode } from "react";
import { CloseButton } from "./CloseButton";

interface ModalProps {
  open: boolean;
  title?: string;
  closeFn: Function;
  trailingIcon?: ReactNode;
  children?: ReactNode;
  bottom?: string | ReactNode;
}

export function Modal(props: ModalProps) {
  const { open, title, trailingIcon, closeFn, children, bottom } = props;

  return (
    <>
      {open && (
        <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="w-9/12 md:w-5/12 bg-white rounded">
            <div className="flex justify-between p-3 bg-slate-200 rounded-t">
              <h1 className="flex items-center text-3xl italic">
                {title} <i className="mt-2 ml-2">{trailingIcon}</i>
              </h1>
              {closeFn && <CloseButton clickFn={closeFn} />}
            </div>
            {children && <div className="p-3">{children}</div>}
            {bottom && (
              <div className="flex justify-between p-3 bg-slate-100 rounded-b">
                <h3 className="text-xl italic">{bottom}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
