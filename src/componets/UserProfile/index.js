import './index.css'

const UserProfile = props => {
  const {userDetailes} = props
  const {url, name, role} = userDetailes
  return (
    <li className="user-card-container">
      <img src={url} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
