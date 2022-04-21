 
const AppButton = ({ color, hover, children, ...props }: any) => {
  return (
    <button
      {...props}
      className="bg-red-300"
    >
      {children}
    </button>
  );
};

export default AppButton;
