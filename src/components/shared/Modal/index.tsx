import { ReactNode, useState } from "react";
import Button from "../Button";

interface ModalProps {
  children?: ReactNode;
  title?: string;
  isOpen?: boolean;
  closeFunction: Function;
}

export function Modal({ title, isOpen, closeFunction, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-70">
          <div className="p-2 w-2/4 bg-slate-700 border rounded">
            {title && (
              <>
                <div className="pb-2 flex justify-between">
                  <h1 className="text-3xl italic">{title}</h1>
                  <Button onClick={() => closeFunction()}>Close</Button>
                </div>
                <hr />
                <br />
              </>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
}
