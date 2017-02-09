export const loadPosts = (payload={}) => {
  console.log('reached the API: loadPosts!')
  return [
    {
      id: 1,
      permalink: 'how-to-write-catchy-headlines-and-blog-titles-your-readers-cant-resist',
      title: 'How to Write Catchy Headlines and Blog Titles Your Readers Can\'t Resist',
      date: 'February 23, 2016 8:00 AM',
      body: `<p>It's one thing to write great content, but it's another thing to get it read and ranked -- which is where nailing the title comes in.</p> 

      <p>Titles are what sell the content. They represent it in search engines, in email, and on social media. It's no surprise, then, that one of the most common questions we get is around crafting titles.</p>
      `,
      tags: ['Content Marketing']

    },
    {
      id: 2,
      permalink: 'here-are-the-101-catchy-blog-title-formulas-that-will-boost-traffic-by-438',
      title: 'Here Are The 101 Catchy Blog Title Formulas That Will Boost Traffic By 438%',
      date: 'January 27, 2017 9:19 AM',
      body: `Data and psychology say you do. And so will your audience when you apply this method to your own blog posts. So would you like to learn how to write catchy blog titles like that?

If you’re genuinely interested in writing better, catchier, and awesome-r blog titles for your already great content, you’re in the right place. This post is going to help you maximize the time you invest in writing your awesome content to help you get more social media shares and traffic from your blog titles.`,
      tags: ['Content Marketing']

    },

  ]

}


export const loadArticle = (permalink) => {

  return {
    id: 4,
    permalink: 'here-are-the-101-catchy-blog-title-formulas-that-will-boost-traffic-by-438',
    title: 'Here Are The 101 Catchy Blog Title Formulas That Will Boost Traffic By 438%',
    date: 'January 27, 2017 9:19 AM',
    body: `<div><h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
            <p>Hello hello how do you do. ahahahahaha wwwot wwwot.</p>
          
            <p>WElll well weelll</p>
          
            <p>i didnot know that it willl look like this.</p>
          
          
            <p>
              This is another paragraph
            </p></div>`,
    tags: ['Content Marketing']

  }




}