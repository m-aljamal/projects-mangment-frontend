import React, { createContext, useContext } from "react";
const callAll =
  (...fns: any) =>
  (...args: any) =>
    fns.forEach((fn: any) => fn && fn(...args));

const DrawerContext = createContext(false);

function Drawer(props: any) {
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

  return (
    <main
      className={
        "    fixed overflow-hidden z-10 bg-black bg-opacity-70 inset-0 transform ease-in-out " +
        (opened
          ? " transition-opacity opacity-100 duration-200 translate-x-0  "
          : "   opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-200 ease-in-out transition-all transform  " +
          (opened ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="p-4 font-bold text-lg text-gray-700">
            {props.header}
          </header>

          {props.children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setOpened(false);
        }}
      ></section>
    </main>
  );
}

const DrawerContents = ({ ...props }) => {
  return <DrawerContentsBase {...props}>{props.children}</DrawerContentsBase>;
};

export { Drawer, DrawerContents, DrawerOpenButton };
