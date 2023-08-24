import { useEffect, useReducer, useState } from 'react';
import Search from "../../components/search";
import RecipeItem from "../../components/recipe-item"
import './styles.css'
import FavoriteItem from '../../components/favorite-item';

// Um dado de exemplo, parece que você não o está usando.
const dummydata = 'dummydata';

// Função de redução para filtrar favoritos.
const reducer = (state, action) => {
    switch (action.type) {
        case 'filterFavorites':
            console.log(action);
            return {
                ...state,
                filteredValue: action.value
            }
        default:
            return state;
    }
}

// Estado inicial para o filtro de favoritos.
const initialState = {
    filteredValue: ''
}

const Homepage = () => {

    // Estados para controlar o carregamento, receitas, favoritos e sucesso da chamada à API.
    const [loadingState, setLoadingState] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [apiCalledSuccess, setApiCalledSuccess] = useState(false);

    // Estado de redução para filtrar favoritos.
    const [filteredState, dispatch] = useReducer(reducer, initialState);

    // Função para obter dados do componente de pesquisa.
    const getDataFromSearchComponent = (getData) => {
        setLoadingState(true);
        async function getRecipes() {
            // Faz uma chamada à API com base na pesquisa.
            const apiResponse = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey={colocarAPIKEYaqui}&query=' + getData);
            const result = await apiResponse.json();
            const { results } = result;

            if (results && results.length > 0) {
                setLoadingState(false);
                setRecipes(results);
                setApiCalledSuccess(true);
            }
        };
        getRecipes()
    }

    // Função para adicionar uma receita aos favoritos.
    const addToFavorites = (getCurrentRecipeId) => {
        let copyFavorites = [...favorites];

        const index = copyFavorites.findIndex(item => item.id === getCurrentRecipeId.id);
        if (index === -1) {
            copyFavorites.push(getCurrentRecipeId);
            setFavorites(copyFavorites);
            // Usa o localstorage para salvar os favoritos.
            localStorage.setItem('favorites', JSON.stringify(copyFavorites));
        } else {
            alert("Receita já adicionada aos favoritos!");
        }
    }

    // Função para remover uma receita dos favoritos.
    const removeFromFavorites = (getCurrentId) => {
        let copyFavorites = [...favorites];
        copyFavorites = copyFavorites.filter(item => item.id !== getCurrentId);

        setFavorites(copyFavorites);
        localStorage.setItem('favorites', JSON.stringify(copyFavorites));
    }

    // Efeito para carregar favoritos do local storage ao carregar a página.
    useEffect(() => {
        const extractFavoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites'));
        setFavorites(extractFavoritesFromLocalStorage);
    }, [])

    // Filtra os itens favoritos com base no valor de filtro.
    const filteredFavoritesItems = favorites.filter((item) =>
        item.title.toLowerCase().includes(filteredState.filteredValue)
    );

    return (
        <div className="homepage">
            <Search
                getDataFromSearchComponent={getDataFromSearchComponent}
                dummydatacopy={dummydata}
                apiCalledSuccess={apiCalledSuccess}
                setApiCalledSuccess={setApiCalledSuccess}
            />

            <div className="favorites-wrapper">
                <h1 className="favorites-title">RECEITAS FAVORITAS</h1>

                <div className="search-favorites">
                    <input
                        onChange={(event) => dispatch({ type: 'filterFavorites', value: event.target.value })}
                        value={filteredState.filteredValue}
                        name="searchFavorites" placeholder='Procurar nos favoritos' className="favoriteFilter" />
                </div>
                <div className="favorites">
                    {
                        filteredFavoritesItems && filteredFavoritesItems.length > 0 ?
                            filteredFavoritesItems.map(item => (
                                <FavoriteItem
                                    removeFromFavorites={() => removeFromFavorites(item.id)}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            ))
                            : null}
                </div>
            </div>

            {
                loadingState && <div className="loading">Carregando receitas! Por favor aguarde...</div>
            }

            <h1>EXPLORAR NOVAS RECEITAS</h1>

            <div className="items">
                {
                    recipes && recipes.length > 0
                        ? recipes.map((item) => <RecipeItem
                            addToFavorites={() => addToFavorites(item)}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            item={item} />)
                        : null}
            </div>
        </div>
    );
};

export default Homepage;
