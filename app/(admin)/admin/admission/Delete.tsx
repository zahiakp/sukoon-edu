"use client";

import { useRouter } from "next/navigation";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { deleteAdmission} from "./func";
import { showMessage } from "@/components/common/CusToast";


const DeleteItem = ({ id,fetch }: { id: any,fetch:any }) => {
  const router = useRouter();
  return (
    <button data-tip="Delete"
      onClick={async () => {
        if (confirm("Are you sure you want to delete")) {
          await deleteAdmission(id).then((res: any) => {
            if (res) {
              showMessage("Application Deleted successfully","success");
                 fetch()
            } else {
              showMessage("Something went wrong","error");
            }
          });
        }
      }}
      className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center cursor-pointer tooltip"
    >
      <MdDeleteOutline className="text-xl text-red-500 " />
    </button>
  );
};

export default DeleteItem;
