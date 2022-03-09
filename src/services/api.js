import axios from "../utils/axios";

export const getSkills = async () => {
  const response = await axios.get("/skills");
  return response?.data;
};

export const getApplications = async () => {
  const response = await axios.get("/applications");
  return response?.data;
};


export const postApplication = async (data) => {
  const response = await axios.post("/application", data);
  return response;
};