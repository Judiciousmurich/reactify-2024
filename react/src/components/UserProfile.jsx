import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile (props) {
    console.log(props)
    return(
        <div id="user-profile">
            <UserUsername username = "judy" />
            
              <UserFavouriteFoods/> 
            <div>
                <span>Age:</span>
                <span>{props.age}</span>
            </div>
            
    <UserFavouriteFoods/>
        </div>
        
    )
}