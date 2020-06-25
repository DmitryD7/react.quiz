import React, {useState} from 'react';
import s from "./Layout.module.css"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

function Layout(props) {

    let [state, setState] = useState({
            menu: false,
        }
    )

    const toggleMenuHandler = () => {
        state.menu = !state.menu
        setState({...state})
    }

    return (
        <div className={s.Layout}>

            <Drawer
                isOpen={state.menu}
            />

            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={state.menu}
            />
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default Layout;