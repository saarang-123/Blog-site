import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="public/assets/img 30.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Similique expedita ducimus aliquid ab doloremque? Deserunt 
         laudantium rerum illum temporibus recusandae?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Similique expedita ducimus aliquid ab doloremque? Deserunt
          laudantium rerum illum temporibus recusandae?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Similique expedita ducimus aliquid ab doloremque? Deserunt 
         laudantium rerum illum temporibus recusandae?</p>
    </div>
  )
}
