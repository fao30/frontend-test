import api from "@/api/api";

export const getNotes = async (sortData: {
  title: "";
  description: "";
  timestamp: "";
}) => {
  let url = `/notes`;
  let sortBy = "";
  let sortOrder = "";

  if (sortData.title) {
    if (sortOrder) {
      sortBy += ",";
      sortOrder += ",";
    }
    sortBy += "title";
    sortOrder += sortData.title;
  }
  if (sortData.description) {
    if (sortOrder) {
      sortBy += ",";
      sortOrder += ",";
    }
    sortBy += "description";
    sortOrder += sortData.description;
  }
  if (sortData.timestamp) {
    if (sortOrder) {
      sortBy += ",";
      sortOrder += ",";
    }
    sortBy += "timestamp";
    sortOrder += sortData.timestamp;
  }
  if (sortBy) {
    url += `?sortBy=${sortBy}&sortOrder=${sortOrder}`;
  }

  const res = await api.get(url);
  return res.data as TNotesResponse[];
};

export const deleteNotes = async (notesId: string) => {
  const res = await api.delete(`/notes/${notesId}`);
  return res.data as unknown;
};

export const getNotesById = async (noteId: string) => {
  const res = await api.get(`/notes/${noteId}`);
  return res.data as TNotesEditCreate;
};

export const postNotes = async (body: TNotesEditCreate) => {
  const res = await api.post(`/notes`, body);
  return res.data as TNotesEditCreate;
};

export const postDownload = async () => {
  const res = await api.post(
    `/notes/download`,
    {},
    {
      responseType: "arraybuffer", // Ensure the response type is arraybuffer
    }
  );
  return res.data as ArrayBuffer;
};

export const putNotes = async (
  adminId: string = "",
  body: TNotesEditCreate
) => {
  const res = await api.put(`/notes/${adminId}`, body);
  return res.data as unknown;
};
