export function Article(props) {
    return <article className="App-Article-Contents">
        <div className="main-content">
            {props.children}
        </div>
    </article>;
}