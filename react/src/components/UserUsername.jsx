import "./styles.css"
export default function UserUsername (props) {
    console.log(props.password)
    return (
        <div>
            <b className="username">username:</b>
            <span>{props.username}</span>
            <b>Password:</b>
            <span>{props.password}</span>
        </div>
    )

}