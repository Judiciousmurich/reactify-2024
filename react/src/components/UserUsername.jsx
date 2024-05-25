export default function UserUsername (props) {
    console.log(props.password)
    return (
        <div>
            <b>username:</b>
            <span>{props.username}</span>
            <b>Password:</b>
            <span>{props.password}</span>
        </div>
    )

}