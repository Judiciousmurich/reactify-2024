import UserProfile from "./components/UserProfile";

export default function App(){
    const callMe = () => {
        console,log("hey")
    };
    return(
        <div>
            <h1>Root Components</h1>
        <UserProfile age= {22} isLoggedIn={true} favouriteFoods={[{
            name: "shisha",
        },
        ]}
        CallMe={callMe}/>
      
        </div>
    )

}