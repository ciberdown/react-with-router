import { createContext, useState } from "react";

interface IContext {
  open: boolean;
  setOpen: Function;
}
interface IProps {
  children: JSX.Element;
}

export const SnackbarContext = createContext<IContext>(null!);

function SnackbarProvider({ children }: IProps) {
  const [open, setOpen] = useState(false);

  return (
    <SnackbarContext.Provider value={{ open, setOpen }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarProvider;
