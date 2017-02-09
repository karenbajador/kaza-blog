export const LOAD_POSTS = 'posts/LOAD_POSTS'
export const LOAD_POSTS_SUCCEEDED = 'posts/LOAD_POSTS_SUCCEEDED'
export const LOAD_POSTS_FAILED = 'posts/LOAD_POSTS_FAILED'

export const LOAD_ARTICLE = 'posts/LOAD_ARTICLE'
export const LOAD_ARTICLE_SUCCEEDED = 'posts/LOAD_ARTICLE_SUCCEEDED'
export const LOAD_ARTICLE_FAILED = 'posts/LOAD_ARTICLE_FAILED'


export const loadPosts = () => ( { type: LOAD_POSTS } )
export const loadArticle = (permalink) => ( { type: LOAD_ARTICLE, permalink: permalink } )

