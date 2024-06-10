import { Button } from "@mui/material";
import React from "react";
import LeadForm from "./LeadForm";
import { useState } from "react";
import LeadGrid from "./LeadGrid";

const Lead = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    
    setOpen(!open);
  };
  return (
    <div>
      <LeadForm open={open} onClose={toggleSidebar} />
      <Button onClick={toggleSidebar}>Open drawer</Button>
      <LeadGrid open={open}/>
    </div>
  );
};

export default Lead;
