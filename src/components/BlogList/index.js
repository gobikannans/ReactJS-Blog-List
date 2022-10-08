import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-container">
      <ul className="blog-list-container">
        {blogsList.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
