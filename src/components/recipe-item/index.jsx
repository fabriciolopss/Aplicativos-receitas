import "./styles.css"
import React from "react";

const RecipeItem = (props)=>{
    const {id, image, title, addToFavorites} = props;


    return(
        <div key = {id} className = "recipe-item">
            <div>
                <img src = {image} alt = "Imagem da receita"/>
            </div>

            <p>{title}</p>
            <div class = "button-favorite">
                <button type = "button" onClick={addToFavorites} >Adicionar aos favoritos</button>
            </div>
            
        </div>
    )

}

export default RecipeItem;