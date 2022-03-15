import Card from '../ui/Card';
import classes from './PokeCard.module.css';

export default function PokeCard(){
    return (
        <Card>
        <div className={classes.card}>
            <h4>Pokemone Name</h4>
            <img className={classes.img} src="https://snipstock.com/assets/cdn/png/4c1886faadb38db63e32a9985ea9c774.png" alt="" />
        </div>
        </Card>
    );
}