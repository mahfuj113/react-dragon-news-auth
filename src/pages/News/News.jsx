import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsDetail from "./NewsDetail";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="font-bold text-xl mb-5">Dragon News</h2>
                    {
                        news?.map(aNews => <NewsDetail key={aNews._id} news={aNews}></NewsDetail>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;