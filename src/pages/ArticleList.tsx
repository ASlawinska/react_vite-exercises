import articles from "./ArticlesContent"
import { Link } from "react-router-dom"

export default function ArticleList(){

    return(
        <>        
        <h1>Articles</h1>
        {articles.map(a =>(
            <Link key={a.title} to={'/articles/'+a.name}>
            <h3>{a.title}</h3>
            <p>{a.content[0]?.substring(0,150)}</p>
            </Link>
        ))}
        </>
    )
}

