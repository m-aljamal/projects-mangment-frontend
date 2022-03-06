import React, { createContext, useContext } from "react";
import { Drawer } from "@mantine/core";
const callAll =
  (...fns: any) =>
  (...args: any) =>
    fns.forEach((fn: any) => fn && fn(...args));

const DrawerContext = createContext(false);

function AppDrawer(props: any) {
  const [opened, setOpened] = React.useState(false);
  return <DrawerContext.Provider value={[opened, setOpened]} {...props} />;
}

function DrawerOpenButton({ children: child }: any) {
  const [, setOpened]: any = useContext(DrawerContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setOpened(true), child.props.onClick),
  });
}

function DrawerContentsBase(props: any) {
  const [opened, setOpened]: any = useContext(DrawerContext);

  return <Drawer opened={opened} onClose={() => setOpened(false)} {...props} />;
}

const DrawerContents = ({ ...props }) => {
  return <DrawerContentsBase {...props}>{props.children}</DrawerContentsBase>;
};

export { AppDrawer, DrawerContents, DrawerOpenButton };
