import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import './_menu.scss'
const Menu = () => {
    return (
        <div className='menu'>
            <h2 className="menuSubTitle">{"What's hot"}</h2>
            <h1 className="menuTitle">Most Popular</h1>
            <MenuPosts />
            <h2 className="menuSubTitle">Discover by topic</h2>
            <h1 className="menuTitle">Categories</h1>
            <MenuCategories />
            <h2 className="menuSubTitle">Chosen by the editor</h2>
            <h1 className="menuTitle">Editors Pick</h1>
            <MenuPosts withImg={true} />
        </div>
    )
}

export default Menu