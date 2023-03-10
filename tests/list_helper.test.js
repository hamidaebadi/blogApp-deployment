/**
 * @jest-environment node
 */
const listHelper = require('../utils/list_helper')
const emptyBlogs = []
const oneBlogList = [{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }]

const manyBlogsList = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]


test('dummy returns one', () => {
    const blogs = []
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe("total likes of", () => {
    test('empy blog-list is zero', () =>{
        expect(listHelper.totalLikes(emptyBlogs)).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {

          expect(listHelper.totalLikes(oneBlogList)).toBe(5)
    })

    test('a bigger list is calculated right', () => {
       

          expect(listHelper.totalLikes(manyBlogsList)).toBe(36)
    })
})


describe('Favorite blog', () => {
    test('is -1 when list is empty', () => {
        expect(listHelper.favoriteBlog(emptyBlogs)).toBe(-1)
    })

    test('is the same as the only blog when there is only one', () =>{
        expect(listHelper.favoriteBlog(oneBlogList)).toEqual(oneBlogList[0])
    })

    test('is the right one when there is many blogs', () => {
        const wantedBlog = manyBlogsList[2]
        expect(listHelper.favoriteBlog(manyBlogsList)).toEqual(wantedBlog)
    })
})