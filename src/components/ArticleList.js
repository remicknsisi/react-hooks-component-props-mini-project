import Article from "./Article"

function ArticleList({ posts }){   
    
    const arrayOfArticles = posts.map(post => {
        return (
            <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
        )
    })
    
    return (
        <main>
            {arrayOfArticles}
        </main>
    )
}

export default ArticleList