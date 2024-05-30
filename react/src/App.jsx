import UserProfile from "./components/UserProfile";

export default function App(){
    const callMe = () => {
        console,log("hey")
    };
    return(
        <div>
            <h1>Root Components</h1>
        <UserProfile username="richgirl" age= {21} isLoggedIn={true} favouriteFoods={[{
            name: "pizza",
            id: "pizza"
        },
        {
            name: "sushi",
            id:"sushi"
        },
        {
            name:""
        }
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}