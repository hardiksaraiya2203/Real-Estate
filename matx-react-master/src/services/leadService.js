import authFetch from "authFetch";


const addLead = async (body) => {
  let d = await authFetch.post("/form/add", body);

  return d;
};

export default addLead;

export const getLead = async () => {
  let data = await authFetch.get("/lead/");

  return data.data;
};

export const deleteLead = async (data1) => {
  let data = await authFetch.post("/lead/deleteMany",data1);

  return data.data;
};

export const editLead = async (editId) => {
  let data = await authFetch.get("/lead/view/"+editId);

  return data.data;
}; 

export const AddEditInfo = async (editId) => {
  console.log(editId);

  let data = await authFetch.put("/form/edit/" + editId._id, editId);

  return data.data;
};

