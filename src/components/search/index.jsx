import "./styles.css";
import { useEffect, useState } from 'react';

const Search = (props)=>{

    const {getDataFromSearchComponent, apiCalledSuccess, setApiCalledSuccess} = props;

    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (event)=>{
        const {value} = event.target;
        setInputValue(value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        getDataFromSearchComponent(inputValue);
    };

    useEffect(()=>{
        if(apiCalledSuccess){
            setInputValue('');
            setApiCalledSuccess(false);
        }
    },[apiCalledSuccess])

    return(
        <form onSubmit = {handleSubmit}className = "Search">
            <div id = "all-wrapper">
            <input name = "search" onChange = {handleInputValue} value = {inputValue} placeholder = "Procurar Receitas" id = "search"/>
            <button id = "submitButton" type = "submit">Procurar</button>
            </div>
        </form>
    )
}

export default Search;