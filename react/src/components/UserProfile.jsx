import propTypes from "prop-types"
import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile (props) {
    console.log(props)

    return(
        <div id="user-profile">
            <UserUsername username = {}/>
            
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
UserProfile.propTypes = {
    username: <propTypes className="string isRequired"></propTypes>
}