import s from "../avatar/avatar.module.css";
const Avatar = () => {
    return (
        <img
            src="https://codefinity-content-media.s3.eu-west-1.amazonaws.com/code-1/react/styling/auditor.png"
            alt="User"
            className={s.avatar}
            width={300}
        />
    )
}

export default Avatar;