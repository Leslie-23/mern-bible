import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

export default function Layout(props) {
    return(
        <div>
            <Header user={props.user} handleLogout={props.handleLogout}/>
            <Outlet />
        </div>
    )
}