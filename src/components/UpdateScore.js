import react from "react";
import { useState } from "react";

// This was created but not implemented as of due date. 2021.11.1

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
