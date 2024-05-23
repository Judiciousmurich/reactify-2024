import { createElement } from "react";

export default function UserFavouriteFoods () {
    return createElement("div", null, <div>
        <section>
                <span>Favourite Foods</span>
                <br/>
                <ul>
                    <li>pizza</li>
                    <li>chips</li>
                    <li>chicken</li>
                </ul>
            </section>
    </div>)

}