import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeadLoading, getLeadLoading } from "slice/leadSlice";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const LeadGrid = ({ open, toggleSidebar,handleEdit }) => {
  const sel = useSelector((state) => state?.lead?.data);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dis = useDispatch();

  useEffect(() => {
    dis(getLeadLoading());
  }, [open, dialogOpen]);

  const [anchorEl, setAnchorEl] = useState(null);

  const [ids, setId] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event, props) => {
    setAnchorEl(event.currentTarget);
    // setId(props);
    // console.log(ids);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const ITEM_HEIGHT = 48;

  const handleDelete = () => {
    dis(deleteLeadLoading([ids]));
    setDialogOpen(false);
  };

  const [colDefs, setColDefs] = useState([
    { field: "leadStatus" },
    { field: "leadName" },
    { field: "leadEmail" },
    { field: "leadPhoneNumber" },
    {
      field: "Actions",
      cellRenderer: (props) => {
        return (
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open1 ? "long-menu" : undefined}
              aria-expanded={open1 ? "true" : undefined}
              aria-haspopup="true"
              onClick={(event) => {
                handleClick(event);
                setId(props?.data?._id);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </>
        );
      },
    },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={sel} columnDefs={colDefs} />
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleDialogOpen();
            handleClose();
          }}
        >
          <DeleteIcon style={{ color: "red", marginRight: "5px" }} />
          <span>Delete</span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleEdit(ids);
            handleClose();
          }}
        >
          <EditNoteIcon style={{ color: "gray", marginRight: "5px" }} />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <RemoveRedEyeIcon style={{ color: "green", marginRight: "5px" }} />
          <span>View</span>
        </MenuItem>
        <MenuItem>
          <CallIcon style={{ color: "gray", marginRight: "5px" }} />
          <span>Create Call</span>
        </MenuItem>
        <MenuItem>
          <EmailIcon style={{ color: "gray", marginRight: "5px" }} />
          <span>Email Send</span>
        </MenuItem>
      </Menu>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this lead?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              //api call function to delete record
              handleDelete();
            }}
            color="primary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeadGrid;
