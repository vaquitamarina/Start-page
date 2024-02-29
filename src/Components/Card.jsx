

export function Card({title, href,children}) {
    return (
        <a className="card" href={href}>
            <div>
                <h2>
                    {title}
                </h2>
                {children}
            </div>
        </a>
    )
}