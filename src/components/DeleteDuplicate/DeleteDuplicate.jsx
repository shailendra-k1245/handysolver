import { MdDelete } from "react-icons/md";
import { LuCopy } from "react-icons/lu";

export const DeleteDuplicate = () => {
    return <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center cursor-pointer">
            <MdDelete />
            <p>Delete</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
            <LuCopy />
            <p>Duplicate</p>
        </div>
    </div>
}