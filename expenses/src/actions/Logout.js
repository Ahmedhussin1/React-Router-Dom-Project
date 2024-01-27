import { redirect } from "react-router-dom";
import { deleteItem } from "../Helper";

redirect
export async function logoutAction(){
    deleteItem({
        key: "userName"
    })
    return redirect('/')
}