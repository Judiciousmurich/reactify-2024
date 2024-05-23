import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile () {
    return(
        <div id="user-profile">
            <UserUsername username = "judy" />
            <b>Age: </b>
            <span>{props.age}</span>
              <UserFavouriteFoods/> 
            <div>
                <span>Email:</span>
                <span>murichjudicious@gmail.com</span>
            </div>
            
    <UserFavouriteFoods/>
        </div>
        
    )
}