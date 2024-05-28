import UserProfile from "./components/UserProfile";
import propTypes from "prop-types"

export default function App(){
    const callMe = () => {
        console,log("hello")
    };
    return(
        <div>
            <h1>Root Components</h1>
        <UserProfile username="richgal" age= {21} isLoggedIn={false} favouriteFoods={[{
            name: "pizza",
            id: "pizza"
        },
        {
            name: "sushi",
            id:"sushi"
        },
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}