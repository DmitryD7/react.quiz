import React from 'react';
import s from "./Layout.module.css"

function Layout(props) {
    return (
        <div className={s.Layout}>
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default Layout;