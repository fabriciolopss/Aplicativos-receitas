import "./styles.css"
import React from "react";

const FavoriteItem = (props)=>{
    const {id, image, title, removeFromFavorites} = props;


    return(
        <div key = {id} className = "favorite-item">
            <div>
                <img src = {image} alt = "Imagem da receita"/>
            </div>

            <p>{title}</p>
            <div class = "button-favorite">
                <button type = "button" onClick={removeFromFavorites}>Remover dos favoritos</button>
            </div>
            
        </div>
    )

}

export default FavoriteItem;