import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeadLoading } from "slice/leadSlice";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

const LeadGrid = ({open}) => {
  const sel = useSelector((state) => state?.lead?.data);
  const dis = useDispatch();

  useEffect(() => {
    dis(getLeadLoading());
  }, [open]);

  const [colDefs, setColDefs] = useState([
    { field: "leadStatus" },
    { field: "leadName" },
    { field: "leadEmail" },
    { field: "leadPhoneNumber" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={sel} columnDefs={colDefs} />
    </div>
  );
};

export default LeadGrid;
