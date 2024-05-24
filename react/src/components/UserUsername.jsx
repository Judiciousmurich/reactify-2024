export default function UserUsername (props) {
    console.log(props.username)
    return (
        <div>
            <b>username:</b>
            <span>{props.username}</span>
        </div>
    )

}