import react from "react";
import { useState } from "react";

function UpdateScore({ score }) {
    const {newScore, setNewScore} = useState(0)
    setNewScore(score);
    return(
        <div class="score-card">
            <h2>Score: {newScore}</h2>
        </div>
    )
}
export default UpdateScore;
