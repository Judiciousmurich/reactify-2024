import UserProfile from "./components/UserProfile";

export default function App(){
    const callMe = () => {
        console,log("hello")
    };
    return(
        <div>
            <h1>Root Components</h1>
        <UserProfile age= {22} isLoggedIn={false} favouriteFoods={[{
            name: "PI",
        },
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}