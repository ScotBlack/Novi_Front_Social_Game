import React from 'react';

function Header() {
    return (
        <>
            <h1 className="game_title">Game Lobby</h1>
            <table>
                <thead>
                    <tr>
                        <th><h2 className="game_info">pin @ H6X45 </h2></th>
                        <th><h2 className="game_info">100 points </h2></th>
                        <th><h2 className="game_info">FFA </h2></th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Header;