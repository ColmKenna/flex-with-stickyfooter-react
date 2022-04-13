import {useState} from "react";

export function Aside(props) {
    const [visible, setVisible] = useState(true);

    return <>
        <aside id={props.id} className={"App-Sidebar "   +  (visible ?  'App-Sidebar-Show' : 'App-Sidebar-Hide' )  + ' ' +  (props.showAsideMobile ?  'App-Sidebar-Show-md' : 'App-Sidebar-Hide-md' )    }>
            <i className="bi bi-x-circle b-1-5x fa-top-icon large-screen-only" onClick={() => setVisible(!visible)}/>
            <div id="sidebar-contents-container" className="sidebar-contents-container">
                {props.children}
            </div>
        </aside>
        <div  className={'large-screen-only ' + (  visible ? 'show-aside-hide' : 'show-aside-show' )}>
            <i className="bi bi-info-circle b-1-5x" onClick={() => setVisible(!visible)}/>

        </div>

    </>
        ;
}