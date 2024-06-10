import {
  Button,
  Drawer,
  FormControl,
  Grid,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "../material-kit/forms/SimpleForm";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { leadLoading } from "slice/leadSlice";
import { Span } from "app/components/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Lead from "./Lead";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
// const TextField = styled(TextValidator)(() => ({
//   width: "100%",
//   marginBottom: "16px",
// }));

export default function LeadForm(props) {
  const [state, setState] = useState({
    leadStatus: "",
    leadName: "",
    leadEmail: "",
    leadPhoneNumber: "",
    moduleId: "66594807544b0e6c5b3645c9",
  });

  const dis = useDispatch();

  const handleSubmit = () => {
    dis(leadLoading(state));
    setState({
      leadStatus: "",
      leadName: "",
      leadEmail: "",
      leadPhoneNumber: "",
      moduleId: "66594807544b0e6c5b3645c9",
    });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { open, onClose } = props;

  const { leadStatus, leadName, leadEmail, leadPhoneNumber } = state;

  return (
    <Drawer open={open} onClose={onClose}>
      <Container>
        <Stack spacing={3}>
          <SimpleCard title="Simple Form">
            {/* <SimpleForm /> */}
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <FormControl
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{ mb: 2, minWidth: 200 }}
                    size="large"
                  >
                    <InputLabel id="demo-select-small-label">
                      Active Lead Status
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      name="leadStatus"
                      value={leadStatus}
                      label="Active Lead Status"
                      onChange={handleChange}
                    >
                      <MenuItem value=""> </MenuItem>
                      <MenuItem value="active">active</MenuItem>
                      <MenuItem value="pending">pending</MenuItem>
                      <MenuItem value="sold">sold</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    type="text"
                    name="leadName"
                    label="leadName"
                    onChange={handleChange}
                    value={leadName || ""}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />

                  <TextField
                    type="email"
                    name="leadEmail"
                    label="leadEmail"
                    value={leadEmail || ""}
                    onChange={handleChange}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                  />

                  <TextField
                    sx={{ mb: 4 }}
                    type="number"
                    name="leadPhoneNumber"
                    label="leadPhoneNumber"
                    onChange={handleChange}
                    value={leadPhoneNumber || ""}
                    errorMessages={["this field is required"]}
                    validators={[
                      "required",
                      "minStringLength:16",
                      "maxStringLength: 16",
                    ]}
                  />
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>
      <Button color="primary" variant="contained" onClick={onClose}>
        Close
      </Button>
    </Drawer>
  );
}
