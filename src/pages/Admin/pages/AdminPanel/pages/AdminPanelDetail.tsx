import Head from "@/components/Head";
import Header from "@/pages/Admin/components/Header";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Fragment, useState, useEffect } from "react";
import Input from "../Input";
import {
  postNotes,
  getNotesById,
  putNotes,
} from "@/api/Routes/Notes";
import toast from "react-hot-toast";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function AdminPanelDetail(): React.JSX.Element {
  const { uuid } = useParams();
  const initialValue: TNotesEditCreate = {
    title: "",
    description: "",
  };

  const navigate = useNavigate();
  const [data, setData] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (uuid) {
      getNotesById(uuid)
        .then((res) => {
          setData({
            title: res?.title,
            description: res?.description,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [uuid]);

  const createMutation = useMutation(postNotes, {
    onSuccess: () => {
      toast.success("Записка добавлена");
      setData(initialValue);
      navigate("/dashboard/admin-panel");
    },
    onError: (err) => console.log(err),
  });

  const editMutation = useMutation(() => putNotes(uuid, data), {
    onSuccess: () => {
      toast.success("Записка редактирована");
      navigate("/dashboard/admin-panel");
    },
    onError: () => toast.error("Звполняйте все поля"),
  });

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate(data);
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (uuid) editMutation.mutate();
  };

  const titleShow = uuid ? "Изменить записку" : "Добавить записку"

  return (
    <Fragment>
      <Head title={`Dashboard - ${titleShow}`} />
      <Header heading={`Cписок записок`} pathBack="/dashboard/admin-panel" />
      <article className="main-padding-x-admin py-shorter flex flex-col gap-8">
        <form
          onSubmit={(e) => {
            uuid ? handleEdit(e) : handleAdd(e);
          }}
          className="main-padding-x py-shorter bg-antiflash flex flex-col gap-16"
        >
          <h5 className="text-spacecadet font-argentcf">
            {titleShow}
          </h5>
          <section className="grid md:grid-cols-3 gap-x-20 gap-y-6">
            <Input
              label="заголовок"
              value={data?.title}
              name="title"
              onChange={handleChange}
              type="text"
            />
            <Input
              label="Oписание"
              value={data?.description}
              name="description"
              onChange={handleChange}
              type="text"
            />
          </section>
          <section className="flex items-center justify-direction gap-4">
            <button
              type="submit"
              className="px-8 py-2 bg-spacecadet text-white p-bigger2 font-argentcf border-1 border-spacecadet"
            >
              {editMutation.isLoading || createMutation.isLoading ? (
                <BeatLoader size={7} color="white" />
              ) : (
                "Сохранить"
              )}
            </button>
            <Link
              to="/dashboard/admin-panel"
              className="px-8 py-2 text-spacecadet bg-white p-bigger2 font-argentcf border-1 border-spacecadet"
            >
              Отменить
            </Link>
          </section>
        </form>
      </article>
    </Fragment>
  );
}
