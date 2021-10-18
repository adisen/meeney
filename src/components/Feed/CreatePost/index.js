import { StyledCreatePost } from './createpost.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faMapPin, faTag, faVideo } from '@fortawesome/free-solid-svg-icons'

const CreatePost = () => {
  return (
    <StyledCreatePost>
      <form>
        <input type='text' placeholder='Share your Moments' />
        <button>Post</button>
      </form>
      <div className='media'>
        <div>
          <FontAwesomeIcon icon={faImage} />
          <p>Image</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faVideo} />
          <p>Videos</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapPin} />
          <p>Location</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTag} />
          <p>Tags</p>
        </div>
      </div>
    </StyledCreatePost>
  )
}

export default CreatePost
