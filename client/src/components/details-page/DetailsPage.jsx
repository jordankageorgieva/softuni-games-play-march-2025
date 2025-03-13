import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import gameServices from "../../services/gameServices";
import useScrollToTop from "../../custom-hook/useScrollToTop";

export default function DetailsPage() {
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

                    {/* <!-- Bonus ( for Guests and Users ) --> */}
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {/* <!-- list all comments for current game (If any) --> */}
                            <li className="comment">
                                <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>Content: The best game.</p>
                            </li>
                        </ul>
                        {/* <!-- Display paragraph: If there are no games in the database --> */}
                        <p className="no-comment">No comments.</p>
                    </div>

                    {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                    <div className="buttons">
                        <Link to={`/games/${game._id}/game-edit`} className="button">Edit</Link>
                        <button onClick={deleteGameHandler}
                            className="button">Delete</button>
                    </div>
                </div>

                {/* <!-- Bonus --> */}
                {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>

            </section>

        </>
    );
}