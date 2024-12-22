import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const newsCollection = collection(db, "news");

    const fetchNews = async () => {
        const data = await getDocs(newsCollection);
        setNews(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    const addNews = async () => {
        await addDoc(newsCollection, { title, content, timestamp: new Date() });
        setTitle("");
        setContent("");
        fetchNews();
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div>
            <h1>News Feed</h1>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button onClick={addNews}>Add News</button>
            </div>
            <div>
                {news.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;
