import ArticleCardStyle from './ArticleCard.module.css';

function HCArticle(props: IArticleCard) {
    return <article className={ArticleCardStyle.articleContainer}>
        <img src={props.image} alt="article-image" />
        <section className={ArticleCardStyle.articleContent}>
            <h3 className={ArticleCardStyle.articleTitle}>
                {props.title}
            </h3>
            <p className={ArticleCardStyle.articleDescription}>
                {props.description}
            </p>
            <div className={ArticleCardStyle.articleLink}>
                <a href="">Read more</a>
                <img src="src/assets/images/articles/arrow.svg" alt="article-arrow" className={ArticleCardStyle.articleLinkIcon}/>
            </div>
        </section>
    </article>
}

export default HCArticle;