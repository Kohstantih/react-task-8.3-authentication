import NewsItem from "./NewsItem";
import useJsonFetch from "../../hooks/useJsonFetch";
import { TObjectNews } from "../../types/TObjectNews";
import './News.css';
import { TLogOut } from "../../types/TLogOut";

export default function News({ token, logOut }: { token: string, logOut: TLogOut }) {
    const [news, loading, error] = useJsonFetch<[], TObjectNews[]>(import.meta.env.VITE_APP_USER_NEWS, [], token);
    
    if (error) logOut();

    return (
        <>  
            {
                news && !error &&
                <ul className="news_list">
                    {news.map((n) => <NewsItem objectNews={n} />)}
                </ul>
            }
            {loading && <p>Loading...</p>}
        </>
    )
}
