import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteItem) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider (props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler (favoritMeetup) {
        setUserFavorites( (prevUserFavorits) => {
            return prevUserFavorits.concat(favoritMeetup);
        });
    };
    function removeFavoritesHandler (meetupId) {
        setUserFavorites(prevUserFavorits => {
            //collect without the item contain this id 
            return prevUserFavorits.filter(meetup => meetup.id !== meetupId );
        });
    };
    function itemIsFavoritesHandler (meetupId) {
        //Get The item whene the meetupId is the some 
        return userFavorites.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler
    }; 

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
    
}

export default FavoritesContext;