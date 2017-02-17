


export const loadPosts = (payload={}) => {

  return fetch(`api/posts`, {
    method  : 'GET',
    headers : {
      'Accept'        : 'application/json',
      'Content-Type'  : 'application/json'
    }
  })

}



export const loadArticle = (permalink) => {

  return fetch(`api/article/${permalink}`, {
      method  : 'GET',
      headers : {
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      }
    })

}