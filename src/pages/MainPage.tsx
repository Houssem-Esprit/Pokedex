import PokeCard from "../components/layouts/PokeCard";
import classes from './MainPage.module.css'
export default function MainPage(){
    const arr = [1,2,3,4,5];
    let id = 0;
    return (
        <div className={classes.conatainer}>
            <div>
                <div className={classes.container_header}>
                    <p>Pokemons List</p>
                    <div className={classes.search}>   
                        <input className={classes.input_style} placeholder="filter the pokemon's list by ID" /> 
                    </div>

                </div>
            </div>
        <div className={classes.card_container}>
            {arr.map(el => (<PokeCard key={id++}/>))}
        </div>
        </div>
    )
}