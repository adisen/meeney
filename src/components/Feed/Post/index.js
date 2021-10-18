import { StyledPost } from './post.styled.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons'

import postImg from '../../../assets/post.png'
import pp from '../../../assets/pp.png'

const Post = () => {
  return (
    <StyledPost>
      <img src={postImg} alt='post' className='post-img' />
      <div>
        <div className='post-header'>
          <img src={pp} alt='Keeto' />
          <div>
            <h4>Rose Kooto</h4>
            <p>
              <span>Abuja</span>
              <span>11hr ago </span>
              <span>200 likes</span>
              <span>
                <b>20 replies</b>
              </span>
            </p>
          </div>
        </div>
        <p className='post-content'>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className='comments'>
          <h6>View all comments</h6>
          <div>
            <div className='comment-header'>
              <img src={pp} alt='keeto' />
              <div>
                <h5>Rose Kooto</h5>
                <p>Last Seen 11hr</p>
              </div>
            </div>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type Read
              more....
            </p>
          </div>
        </div>
        <div className='cta'>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </StyledPost>
  )
}

export default Post
