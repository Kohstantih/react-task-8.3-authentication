import { TObjectNews } from "../../types/TObjectNews";

export default function NewsItem({ objectNews }: { objectNews: TObjectNews }) {
    const { id, title, image, content } = objectNews;

    return (
        <li key={id} className="news_item">
            <img src={image} alt="Иллюстрация к новости" className="news_img" />
            <div className="content_box">
                <h3 className="news_title">{title}</h3>
                <p className="news_content">{content}</p>
            </div>
        </li>
    )
}