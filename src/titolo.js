import React from 'react';
import img4 from './immagini/img5.jpeg';

export default function titolo() {
    return (
        <div className="Titolo">
            <h1>PER MARTINA</h1>
            <h2>DA GIANMARCO</h2>
            <hr/>
            <p><img src={img4} alt="Prima foto" height="500"></img></p>
            <br/>
            
        </div>
    )
}
