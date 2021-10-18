import {
  StyledProfile,
  StyledProfileDetails,
  StyledProfileStats
} from './profiledetails.styled'
import profileImage from '../../../assets/profileImage.png'

const ProfileDetails = () => {
  return (
    <StyledProfile>
      <img src={profileImage} alt='profile' />
      <StyledProfileDetails>
        <h1>Rose Kooto</h1>
        <h5>User Name</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </StyledProfileDetails>
      <StyledProfileStats>
        <div className='stats'>
          <div className='single-stat'>
            <h3>105</h3>
            <h4>Posts</h4>
          </div>
          <div className='single-stat'>
            <h3>10580</h3>
            <h4>Supporting</h4>
          </div>
          <div className='single-stat'>
            <h3>8905</h3>
            <h4>Followers</h4>
          </div>
          <div className='single-stat'>
            <h3>45930</h3>
            <h4>Following</h4>
          </div>
        </div>
        <button>Following</button>
        <p>Other Pages</p>
        <p>Business One</p>
        <p>Business One longer name</p>
        <p>Businees One</p>
        <p>Business One</p>
      </StyledProfileStats>
    </StyledProfile>
  )
}

export default ProfileDetails
