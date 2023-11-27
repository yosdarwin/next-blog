import Featured from "./components/Featured/Featured";
import HomePost from "./components/HomePost/HomePost";
import PopularCategories from "./components/PopularCategories/PopularCategories";

export default function Home() {
    return (
        <>
            <Featured />
            <PopularCategories />
            <HomePost />
        </>
    );
}
