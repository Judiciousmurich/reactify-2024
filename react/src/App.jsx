import UserProfile from "./components/UserProfile";

export default function App(){
    const callMe = () => {
        console,log("hello")
        props.callMe()
    };
    return(
        <div>
            <h1>Root Component</h1>
        <UserProfile age= {21} isLoggedIn={true} favouriteFoods={[{
            name: "pizza",
        },
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}