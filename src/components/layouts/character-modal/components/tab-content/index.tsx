import React from "react";

interface ITabContent {
  children: React.ReactNode;
  currentIndex: number;
}
export const TabContent = ({ children, currentIndex }: ITabContent) => {
  const components = React.Children.map(children as any, (child, index) =>
    React.cloneElement(child, {
      isSelected: index === currentIndex,
    })
  );
  return components;
};
