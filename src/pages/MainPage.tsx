import PokeCard from "../components/layouts/PokeCard";
import classes from './MainPage.module.css'
export default function MainPage(){
    const arr = [1,2,3,4,5];
    let id = 0;
    return (
        <div className={classes.conatainer}>
            <p>Pokemons List</p>
        <div className={classes.card_container}>
            {arr.map(el => (<PokeCard key={id++}/>))}
        </div>
        </div>
    )
}