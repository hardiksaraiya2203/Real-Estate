import { Button } from "@mui/material";
import React from "react";
import LeadForm from "./LeadForm";
import { useState } from "react";
import LeadGrid from "./LeadGrid";

const Lead = () => {
  const [open, setOpen] = useState(false);
  const [editId,setEditId] = useState(null); 

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleEdit = (id) => {
    setEditId(id);
    setOpen(true);
  };  
  return (
    <div>
      <LeadForm open={open} onClose={toggleSidebar} editId={editId} setEditId={setEditId} />
      <Button onClick={toggleSidebar}>Open drawer</Button>
      <LeadGrid open={open} toggleSidebar={toggleSidebar} handleEdit={handleEdit}/>
    </div>
  );
};

export default Lead;
