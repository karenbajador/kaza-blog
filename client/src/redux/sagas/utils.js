export const checkStatus = (response) => {

  if (response.status >= 200 && response.status < 300) {
    try {
      console.log('nag return???')
      return response.json()
    } catch (error) {
      console.log('error ba error ba')
      console.log(error)
      return {error: 'Could not load article.'}
    }
  } else {
    console.log('dito ba dito ba')
    throw response
  }
}