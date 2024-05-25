import UserProfile from "./components/UserProfile";

export default function App(){
    const callMe = () => {
        console,log("hello")
    };
    return(
        <div>
            <h1>Root Component</h1>
        <UserProfile age= {22} isLoggedIn={false} favouriteFoods={[{
            name: "pizza",
        },
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}