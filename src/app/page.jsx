import CategoryList from "@/components/categoryList/CategoryList";
import "./_home.scss";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className="home">
      <span className="light">
        <Featured />
        <CategoryList />
        <div className="homeContent">
          <CardList page={page} />
          <Menu />
        </div>
      </span>
    </div>
  );
}
