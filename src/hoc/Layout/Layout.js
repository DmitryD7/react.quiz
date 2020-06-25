import React, {useState} from 'react';
import s from "./Layout.module.css"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

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