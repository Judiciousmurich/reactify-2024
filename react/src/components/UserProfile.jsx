import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile (props) {
    return(
        <div id="user-profile">
            <UserUsername username = "judy" />
            <b>Age: </b>
            <span>{props.age}</span>
              <UserFavouriteFoods/> 
            <div>
                <span>Age:</span>
                <span>{props.age}</span>
            </div>
            
    <UserFavouriteFoods/>
        </div>
        
    )
}