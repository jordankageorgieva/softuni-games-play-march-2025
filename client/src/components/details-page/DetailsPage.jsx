import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import gameServices from "../../services/gameServices";
import useScrollToTop from "../../custom-hook/useScrollToTop";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";

export default function DetailsPage({
    email
}) {
    const { gameId } = useParams();
    const [game, setGame] = useState([]);

    const navigate = useNavigate();

    useScrollToTop.useScrollToTop();

    useEffect(() => {
        gameServices.getGame(gameId)
            .then(res => {
                setGame(res);
            })
    }, [gameId]);

    const deleteGameHandler = () => {
        const hasConfirm = confirm(`Are you sure youi want to delete ${game.title} game?`);
        if (hasConfirm) {
            try {
                gameServices.deleteGame(gameId);
                navigate('/games');
            } catch (error) {
                console.error('Error deleting game:', error);
            }
        }

    }

    return (
        <>
            {/* <!--Details Page--> */}
            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">

                    <div className="game-header">
                        <img className="game-img" src={game.imageUrl} />
                        <h1>{game.title}</h1>
                        <span className="levels">MaxLevel: {game.maxLevel}</span>
                        <p className="type">{game.category}</p>
                    </div>

                    <p className="text">
                        {game.summary}
                    </p>
                    <CommentsList />
                    

                    {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                    <div className="buttons">
                        <Link to={`/games/${game._id}/game-edit`} className="button">Edit</Link>
                        <button onClick={deleteGameHandler}
                            className="button">Delete</button>
                    </div>
                </div>

                <CommentAdd email={email}/>

            </section>

        </>
    );
}