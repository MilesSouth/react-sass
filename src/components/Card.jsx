import CardStyle from "../sass/card.module.scss"

const Card = ({ item }) => {
  return (
    <div className={CardStyle["card"]}>
      <div className="name">
        <span className="name-content">{item.name}</span>
      </div>
      <div className="job">
        <span className="job-content">{item.job}</span>
      </div>
      <div className="comment">
        <span className="comment-content">{item.comment}</span>
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
