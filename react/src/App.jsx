import UserProfile from "./components/UserProfile";

export default function App(){
    const callMe = () => {
        console,log("hello")
    };
    return(
        <div>
            <h1>Root Components</h1>
        <UserProfile username age= {21} isLoggedIn={false} favouriteFoods={[{
            name: "pizza",
        },
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}