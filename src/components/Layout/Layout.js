import React from 'react'
import Aux from '../../hoc/Aux'
import Classes from './layout.css'
const Layout = (props) => (
    <Aux>
        <div className={Classes.Content}>header, main, footer</div>
        <main>
            {props.children}
        </main>
    </Aux>
);
    
export default Layout;
