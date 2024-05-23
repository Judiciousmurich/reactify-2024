import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";

export default function UserProfile () {
    return(
        <div id="user-profile">
            <UserUsername/>
            <div>
                <span>Email:</span>
                <span>murichjudicious@gmail.com</span>
            </div>
            
    <UserFavouriteFoods/>
        </div>
        
    )
}