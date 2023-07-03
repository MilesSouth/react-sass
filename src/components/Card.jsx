import CardStyle from "../sass/card.module.scss"

const Card = ({ item }) => {
  return (
    <div className={CardStyle["card"]}>
      <div className={CardStyle["name"]}>
        <span className={CardStyle["name-content"]}>{item.name}</span>
      </div>
      <div className={CardStyle["job"]}>
        <span className={CardStyle["job-content"]}>{item.job}</span>
      </div>
      <div className={CardStyle["comment"]}>
        <span className={CardStyle["comment-content"]}>{item.comment}</span>
      </div>
      <div className={CardStyle.image}>
        <img src={item.img} alt="" width={"300rem"} />
      </div>
      <div className={CardStyle.buttons}>
        <button className={CardStyle.small}>Small</button>
        <button className={CardStyle.large}>Large</button>
      </div>
    </div>
  )
}

export default Card
