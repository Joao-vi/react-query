import React from "react";

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const refElement = React.useRef<HTMLDivElement>();

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((state) => !state), []);

  React.useEffect(() => {
    const handleCheckClick = (event: any) => {
      event.stopPropagation();
      const elElement = refElement?.current;

      if (isOpen) {
        const a = elElement?.contains(event?.target);
        if (!elElement || a) {
          return;
        }
        close();
      }
    };

    const handleCheckWhell = (event: any) => {
      console.log("event - Wheel", event);
    };

    document.addEventListener("mousedown", handleCheckClick);
    document.addEventListener("wheel", handleCheckWhell);

    return () => {
      removeEventListener("whell", handleCheckWhell);
      return removeEventListener("mousedown", handleCheckClick);
    };
  }, [close, isOpen]);

  console.log("IsOpen", isOpen);
  return { open, close, toggle, isOpen, refElement };
};
