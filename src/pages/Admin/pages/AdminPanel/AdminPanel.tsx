import Head from "@/components/Head";
import { Fragment, useState } from "react";
import Header from "../../components/Header";
import {
  deleteNotes, getNotes, postDownload,
} from "@/api/Routes/Notes";
import { tableSkeleton } from "@/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalDelete from "@/components/ModalDelete";
import { toast } from "react-hot-toast";

export default function AdminPanel(): React.JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [idNotes, setIdNotes] = useState<string>("");
  const [sortData, setSortData] = useState({
    title: "",
    description: "",
    timestamp: "",
  });

  const { data, isLoading, isFetching, refetch } = useQuery(
    ["notes", sortData], () => getNotes(sortData), { keepPreviousData: true }
  );

  const columnFirst = "px-4 py-2 w-12 md:w-[10%] text-center";
  const columnSecond = "px-4 py-2 w-72 md:w-[70%] truncate";
  const columnThird = "px-4 py-2 w-72 md:w-[70%] truncate";
  const columnFourth = "px-4 py-2 w-44 md:w-[70%] truncate";
  const columnFifth =
    "px-4 py-2 w-16 md:w-[10%]  flex items-center justify-center text-spacecadet text-center";

  const downloadMutation = useMutation(() => postDownload(), {
    onSuccess: (response) => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'notes.xlsx');
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);

      toast.success("Downloaded");
    },
    onError: () => toast.error("Error Downloading"),
  });

  const handleDeleteAdmin = () => {
    if (idNotes) {
      deleteNotes(idNotes)
        .then(() => {
          refetch()
          toast.success(`Заметка удалена`);
          setShowModal(false)
        })
        .catch((err: any) => console.log(err));
    }
  };

  const handleDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    downloadMutation.mutate();
  };

  return (
    <Fragment>
      <Head title={`Админка - список заметок`} />
      <Header heading={"Админка - список заметок"} />
      <ModalDelete
        show={showModal}
        handleConfirm={handleDeleteAdmin}
        onClose={() => setShowModal(false)}
      />
      <article className="main-padding-x-admin py-shorter flex flex-col gap-6">
        <div className="flex justify-end gap-y-4 gap-2 md:flex-nowrap flex-wrap">
          <Link
            to="detail"
            className="w-full md:w-fit justify-center p-bigger uppercase items-center flex gap-2 px-6 lg:px-10 py-2 bg-white border-2 text-spacecadet border-spacecadet"
          >
            <Icon icon="mdi:plus" width={25} />
            Cоздать
          </Link>
          <div
            onClick={handleDownload}
            className="w-full md:w-fit justify-center p-bigger uppercase items-center flex gap-2 px-6 lg:px-10 py-2 bg-white border-2 text-spacecadet border-spacecadet"
          >
            <Icon icon="material-symbols:download" width={25} />
            Экспорт
          </div>
        </div>
        <section className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left flex bg-spacecadet p-bigger text-white font-argentcf">
                <th className={columnFirst}>No</th>
                <th className={columnSecond + " flex flex-direction gap-2"}>
                  <div>
                    Заголовок
                  </div>
                  <div
                    onClick={() => {
                      setSortData({ ...sortData, title: sortData.title === "asc" ? "desc" : "asc" })
                    }}
                    className={`hover:cursor-pointer transition ${sortData.title === "asc" ? "rotate-180 pt-0" : "rotate-0 pt-1"} `}>
                    <Icon icon="tabler:arrow-up" width={23} />
                  </div>
                </th>
                <th className={columnThird + " flex flex-direction gap-2"}>
                  <div>
                    Oписание
                  </div>
                  <div
                    onClick={() => {
                      setSortData({ ...sortData, description: sortData.description === "asc" ? "desc" : "asc" })
                    }}
                    className={`hover:cursor-pointer transition ${sortData.description === "asc" ? "rotate-180 pt-0" : "rotate-0 pt-1"} `}>
                    <Icon icon="tabler:arrow-up" width={23} />
                  </div>
                </th>
                <th className={columnFourth + " flex flex-direction gap-2"}>
                  <div>
                    Дата создания
                  </div>
                  <div
                    onClick={() => {
                      setSortData({ ...sortData, timestamp: sortData.timestamp === "asc" ? "desc" : "asc" })
                    }}
                    className={`hover:cursor-pointer transition ${sortData.timestamp === "asc" ? "rotate-180 pt-0" : "rotate-0 pt-1"} `}>
                    <Icon icon="tabler:arrow-up" width={23} />
                  </div>
                </th>
                <th className={columnFifth}></th>
              </tr>
            </thead>
            <tbody className="flex flex-col divide-y-1 divide-crayola">
              {isLoading
                ? Array(5)
                  .fill(5)
                  .map((_, index: number) => {
                    return (
                      <tr
                        key={index}
                        className="flex bg-antiflash p-bigger text-dark font-arial"
                      >
                        <td className={columnFirst}>
                          <div className={tableSkeleton} />
                        </td>
                        <td className={columnSecond}>
                          <div className={tableSkeleton} />
                        </td>
                        <td className={columnThird}>
                          <div className={tableSkeleton} />
                        </td>
                      </tr>
                    );
                  })
                : data?.map((admin, index: number) => {
                  const utcDate = new Date(admin?.timestamp); // Example UTC date
                  const localDateString = utcDate.toLocaleString();

                  return (
                    <tr
                      key={admin._id}
                      className="flex bg-antiflash p-bigger text-dark font-arial"
                    >
                      <td className={columnFirst}>
                        {index + 1}
                      </td>
                      <td className={columnSecond}>
                        {isFetching ? (
                          <div className={tableSkeleton} />
                        ) : (
                          admin.title
                        )}
                      </td>
                      <td className={columnThird}>
                        {isFetching ? (
                          <div className={tableSkeleton} />
                        ) : (
                          admin.description
                        )}
                      </td>
                      <td className={columnFourth}>
                        {isFetching ? (
                          <div className={tableSkeleton} />
                        ) : (
                          localDateString
                        )}
                      </td>
                      <td className={columnFifth}>
                        {isFetching ? (
                          <div className={tableSkeleton} />
                        ) : (
                          <section className="flex flex-direction gap-2">
                            <div className="hover:cursor-pointer" onClick={() => {
                              setShowModal(true)
                              setIdNotes(admin._id)
                            }}>
                              <Icon icon="material-symbols:delete-outline" width={27} />
                            </div>
                            <Link to={`detail/${admin._id}`} type="button">
                              <Icon icon="bxs:edit" width={25} />
                            </Link>
                          </section>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </article>
    </Fragment>
  );
}
