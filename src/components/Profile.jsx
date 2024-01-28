import profile from "../assets/profile.jpg";
function Profile() {
  return (
    <div className="profile">
      <img src={profile} alt="profile_picture" className="profile_picture" />
      <h1 className="profile_name">Debraj Roy</h1>
      <h2 className="profile_location">West Bengal,India</h2>
      <h3 className="profile_bio">"Front-end Developer | Certified Weeb"</h3>
    </div>
  );
}
export default Profile;
