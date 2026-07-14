import "../styles/layouts/PageCard.css"

function PageCardLayout({ children, cardClassName = ""}){
    return (
        <div className="page-bg">
            <div className={`page-card ${cardClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default PageCardLayout