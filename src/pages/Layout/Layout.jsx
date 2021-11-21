import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

export default function Layout({user, handleLogout}) {
    return(
        <div>
            <Header user={user} handleLogout={handleLogout}/>
            <Outlet />
        </div>
    )
}