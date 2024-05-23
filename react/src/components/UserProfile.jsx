import UserFavouriteFoods from "./UserFavouriteFoods";

export default function UserProfile () {
    return(
        <div id="user-profile">
            <p>Judicious Murich</p>
            <div>
                <span>Email:</span>
                <span>murichjudicious@gmail.com</span>
            </div>
            <section>
                <span>Favourite Foods</span>
                <br/>
                <ul>
                    <li>pizza</li>
                    <li>chips</li>
                    <li>chicken</li>
                </ul>
            </section>
    
        </div>
        
    )
}