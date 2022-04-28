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

    document.addEventListener("mousedown", handleCheckClick);

    return () => removeEventListener("mousedown", handleCheckClick);
  }, [close, isOpen]);

  return { open, close, toggle, isOpen, refElement };
};
