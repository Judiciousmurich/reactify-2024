import PropTypes from "prop-types"
import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile (props) {
    console.log(props)

    return(
        <div id="user-profile">
            <UserUsername username = {props.username}/>
            
              <UserFavouriteFoods/> 
            <div>
                <span>Age:</span>
                <span>{props.age}</span>
            </div>
            
    <UserFavouriteFoods/>
{String(props.isLoggedIn)}
        </div>
        
    )
}
UserProfile.PropTypes = {
    username:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    callMe: PropTypes.number.isRequired
    // isLoggedIn: PropTypes.bool,
}