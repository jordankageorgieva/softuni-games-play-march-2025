import { useEffect, useState } from "react";
import gameServices from "../../services/gameServices";
import CataloguePageItem from "./CataloguePageItem";

export default function CataloguePage() {
    const[games,setGames] = useState({});

    useEffect(() => {
        gameServices.getAll()
            .then(result => {
                setGames(result);
                // console.log(result)
            })

    }, []);

    console.log(games);

    return (
        <>
            {/* <!-- Catalogue --> */}
            <section id="catalog-page">
                <h1>All Games</h1>
                {/* <!-- Display div: with information about every game (if any) --> */}
                
               {/* {games &&
                games.map( game => (
                    <CataloguePageItem
                        key= {game._id}
                    />
                ))
               } */}

                <div className="allGames">
                    <div className="allGames-info">
                        <img src="./images/avatar-1.jpg" />
                        <h6>Action</h6>
                        <h2>Cover Fire</h2>
                        <a href="#" className="details-button">Details</a>
                    </div>

                </div>
                

                {/* <!-- Display paragraph: If there is no games  --> */}
                <h3 className="no-articles">No articles yet</h3>
            </section>
        </>
    );
}