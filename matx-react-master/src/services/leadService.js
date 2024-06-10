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
