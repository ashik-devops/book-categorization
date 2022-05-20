import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";

const buttonStyle = {
  float: "right",
};

export default function BasicModal({ open, onClose, header, children, width }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
    width: `${width}px`,
    height: "auto",
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ color: "green" }}
          >
            {header}
          </Typography>
          <Typography
            id="modal-modal-description"
            component="div"
            sx={{ mt: 2, ml: 2 }}
          >
            {children}
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="div"
            sx={{ mt: 3 }}
          >
            <Button
              sx={buttonStyle}
              variant="contained"
              color="warning"
              onClick={onClose}
            >
              Close
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
