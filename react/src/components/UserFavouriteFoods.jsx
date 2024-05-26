import { createElement } from "react";

export default function UserFavouriteFoods () {
    return createElement("div", null, 
    <section>
    <span>Favourite Foods</span>
    <br/>
    <ul>
        <li>chicken</li>
        <li>pizza</li>
        <li>chips</li>
        <li>curry</li>
        <li>eggs</li>


    </ul>
</section>
    )
}