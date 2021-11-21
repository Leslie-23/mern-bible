import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

export default function Layout({user, handleLogout}) {
    return(
        <div className="font-theme bg-primary">
            <Header user={user} handleLogout={handleLogout}/>
            <Outlet />
        </div>
    )
}