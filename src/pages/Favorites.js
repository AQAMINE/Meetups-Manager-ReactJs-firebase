import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage () {
    const faveoritesCnx = useContext(FavoritesContext);

    let content;
    if(faveoritesCnx.totalFavorites === 0){
        content =  <p>You got no favorite yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups={faveoritesCnx.favorites} />
    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}
export default FavoritesPage;