const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <div className="profile-container">
      <img src="{imageUrl}" className="avatar" alt="avatar" />

      <div className="user-container">
        <h1 className="heading">{name}</h1>
        <p className="para">{role}</p>
      </div>
    </div>
  )
}
export default UserProfile
