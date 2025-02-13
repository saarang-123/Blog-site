import './singlePost.css'

export default function singlePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="public/assets/3 (2).jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
      Lorem ipsum dolor sit amet.
      <div className="singlePostEdit">
      <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
      <i className="singlePostIcon fa-regular fa-trash-can"></i> 
      </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Saarang</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem autem quae voluptate, corporis ab velit ipsam, consequuntur
             minima delectus placeat cumque eius adipisci exercitationem suscipit!
              Ab soluta perferendis iste maiores qui, nihil molestiae consectetur fugiat dolores, consequuntur delectus
               aspernatur ut exercitationem atque magnam modi accusantium laboriosam nisi itaque in voluptatum, reprehenderit 
               excepturi? Saepe quam ipsum rem hic. Quasi earum non assumenda ad, explicabo quaerat vitae delectus quae voluptate!
             Cupiditate omnis doloribus sapiente excepturi, accusantium quisquam voluptatem animi asperiores suscipit molestias?
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem autem quae voluptate, corporis ab velit ipsam, consequuntur
             minima delectus placeat cumque eius adipisci exercitationem suscipit!
              Ab soluta perferendis iste maiores qui, nihil molestiae consectetur fugiat dolores, consequuntur delectus
               aspernatur ut exercitationem atque magnam modi accusantium laboriosam nisi itaque in voluptatum, reprehenderit 
               excepturi? Saepe quam ipsum rem hic. Quasi earum non assumenda ad, explicabo quaerat vitae delectus quae voluptate!
             Cupiditate omnis doloribus sapiente excepturi, accusantium quisquam voluptatem animi asperiores suscipit molestias? </p>
      </div>
    </div>
  )
}
