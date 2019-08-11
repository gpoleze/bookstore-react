import React from 'react';

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="/" className="brand-logo ml-3">Bookstore</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href={"/authors"}>Authors</a></li>
                        <li><a href={"/books"}>Books</a></li>
                        <li><a href={"/about"}>About</a></li>
                    </ul>
                </div>
            </nav>
    );
};
export default Header;
