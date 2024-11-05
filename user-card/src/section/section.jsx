import s from "../section/section.module.css";
const Section = (props) => <div className={s.container}>{props.children}</div>

export default Section;