import { createElement } from "react";

export default function UserFavouriteFoods () {
    return createElement("div", null, 
    <section>
    <span>Favourite Foods</span>
    <br/>
    <ul>
        <li>chicken</li>
        <li>chips</li>
        <li>chicken</li>
    </ul>
</section>
    )
}