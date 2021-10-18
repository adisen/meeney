import { StyledCreatePost } from './createpost.styled'

import imagesIcon from '../../../assets/imagesIcon.svg'
import videoIcon from '../../../assets/videoIcon.svg'
import mapIcon from '../../../assets/map-marker.svg'
import tagIcon from '../../../assets/tag.svg'

const CreatePost = () => {
  return (
    <StyledCreatePost>
      <form>
        <input type='text' placeholder='Share your Moments' />
        <button>Post</button>
      </form>
      <div className='media'>
        <div>
          <img src={imagesIcon} alt='gallery' />
          <p>Image</p>
        </div>
        <div>
          <img src={videoIcon} alt='gallery' />
          <p>Videos</p>
        </div>
        <div>
          <img src={mapIcon} alt='gallery' />
          <p>Location</p>
        </div>
        <div>
          <img src={tagIcon} alt='gallery' />
          <p>Tags</p>
        </div>
      </div>
    </StyledCreatePost>
  )
}

export default CreatePost
