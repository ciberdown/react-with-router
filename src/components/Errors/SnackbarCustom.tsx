import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import React, { useContext } from "react";
import { SnackbarContext } from "../context/SnackbarProvider";

interface IProps {
  message?: string;
  severity?: string;
}

function SnackbarCustom({
  message = "login to access the page!",
  severity = "error",
}: IProps) {
  const duration = 2000;
  const { open, setOpen } = useContext(SnackbarContext);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity as any}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarCustom;
