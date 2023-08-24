import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import del from "@/assets/delete.svg";
import { useTranslation } from "react-i18next";

type TProps = {
  show: boolean;
  onClose: () => void;
  handleConfirm: () => void;
};

export default function ModalDelete({
  show,
  onClose,
  handleConfirm,
}: TProps): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="section" className="z-50 relative" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full main-padding-x">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <article
                className={`w-full md:w-[80%] lg:w-[55%] xl:w-[45%] relative flex items-center justify-center flex-col gap-1 md:gap-2 bg-antiflash p-normal md:p-shorter`}
              >
                <h3 className="font-arial text-spacecadet uppercase">
                  Удалить
                </h3>
                <img src={del} />
                <p className="p-bigger text-crayola">Заметку</p>
                <section className="flex gap-4 mt-2 md:mt-4">
                  <button
                    className="p-bigger px-6 py-1 border-2 border-spacecadet bg-spacecadet font-arial text-white"
                    onClick={handleConfirm}
                  >
                    Удалить
                  </button>
                  <button
                    className="p-bigger px-6 py-1 border-2 border-spacecadet bg-transparent font-arial text-spacecadet"
                    onClick={onClose}
                  >
                    Отменить
                  </button>
                </section>
              </article>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
