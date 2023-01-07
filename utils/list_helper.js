const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  let sum = 0
  if (blogs.length === 0){
    return 0
  }
  blogs.forEach(item => {
    sum += item.likes
  })
  return sum
}

const favoriteBlog = (blogs) => {
  let favorite = null
  if(blogs.length === 0){
    return -1
  }

  let mostLiked = 0
  blogs.forEach(blog  => {
    if(blog.likes > mostLiked){
      mostLiked = blog.likes
      favorite = { ...blog }
    }
  })
  return favorite
}

const mostBlogs = blogs => {
  const dict = {}
  blogs.map(blog => {
    // eslint-disable-next-line no-prototype-builtins
    if ((dict.hasOwnProperty(blog.author))){
      dict[blog.author] += 1
    }else{
      dict[blog.author] = 1
    }
  })

  //find the max
  let max = 0
  let resultAuthor = ''

  for (const author in dict){
    if(dict[author] > max){
      resultAuthor = author
      max = dict[author]
    }
  }
  return { auhtor: resultAuthor, blogs: max }
}


const mostLikes = blogs => {
  const dict = {}
  blogs.map(blog => {
    // eslint-disable-next-line no-prototype-builtins
    if (!(dict.hasOwnProperty(blog.author))){
      dict[blog.author] = blog.likes
    }else{
      dict[blog.author] += blog.likes
    }
  })

  let max = 0
  let famousAuthor = null
  for(const author in dict){
    if(dict[author] > max){
      max = dict[author]
      famousAuthor = author
    }
  }

  return { author: famousAuthor, likes: max }
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}