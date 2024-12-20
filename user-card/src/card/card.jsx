import s from "../card/card.module.css"

const Card = ({name, surname, age, occupation, bio}) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <p className={s.text}>
                    <span className={s.mainText}>Name:</span> John Smith
                </p>
            </li>
            <li className={s.item}>
                <p className={s.text}>
                    <span className={s.mainText}>Surname:</span> Johnson
                </p>
            </li>
            <li className={s.item}>
                <p className={s.text}>
                    <span className={s.mainText}>Age:</span> 35
                </p>
            </li>
            <li className={s.item}>
                <p className={s.text}>
                    <span className={s.mainText}>Occupation:</span> Software Engineer
                </p>
            </li>
            <li className={s.item}>
                <p className={s.text}>
                    <span className={s.mainText}>BIO:</span> John Smith Johnson, a
                    35-year-old software engineer, excels in developing innovative
                    solutions. His expertise and dedication make him a valuable asset to any
                    team.
                </p>
            </li>
        </ul>
    )
}

export default Card;