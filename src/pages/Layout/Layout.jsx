import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

export default function Layout({user, handleLogout}) {
    return(
        <div class="bg-red-500">
            <Header user={user} handleLogout={handleLogout}/>
            <Outlet />
        </div>
    )
}