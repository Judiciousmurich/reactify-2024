import propTypes from "prop-types";
import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile(props) {
  console.log(props);

  return (
    <>
      <UserUsername username={props.username} />

      <UserFavouriteFoods />
      <>
        <b>Age:</b>
        <span>{props.age}</span>
      </>

      <UserFavouriteFoods />
      {String(props.isLoggedIn)}
    </>
  );
}
UserProfile.PropTypes = {
  username: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  callMe: propTypes.number.isRequired,
  isLoggedIn: propTypes.bool,
  favouriteFoods: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    })
  ),
};
