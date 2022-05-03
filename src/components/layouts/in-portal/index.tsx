import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

export interface IInPortal {
  children: ReactNode;
  id: "character-portal";
}
export const InPortal = ({ children, id }: IInPortal) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ReactDOM.createPortal(children, document.getElementById(id));
};
