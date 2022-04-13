import {useState} from "react";


export function NavigationBar(props) {

    const [visible, setVisible] = useState(true);

    return <>
<div  className={'large-screen-only ' + (  visible ? 'show-aside-hide' : 'show-aside-show' )}>
    <i className="bi bi-list b-1-5x" onClick={() => setVisible(!visible)}/>

</div>

        <nav id={props.id} className={"App-Navigation-Bar "  +  (visible ?  'App-Sidebar-Show' : 'App-Sidebar-Hide' )  + ' ' +  (props.showNavMobile ?  'App-Sidebar-Show-md' : 'App-Sidebar-Hide-md' )    }>
            <i className="bi bi-x-circle b-1-5x fa-top-icon fa-icon-right large-screen-only" onClick={() => setVisible(!visible)}/>
            <div id="nav-content">

                {props.children}
            </div>
        </nav>
    </>
        ;
}