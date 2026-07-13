import "../styles/MainLayout.css";

function MainLayout( {children} ){
    return (
        <div className= "main-layout">
            <div className= "page">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;