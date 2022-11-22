import React from 'react';
import '../App.css';
import { useAppContext } from './context';
import { useNavigate } from 'react-router';


const  Favorites = () => {
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();


    const navigate = useNavigate();

    console.log("favorites are", favorites);

    const favoritesChecher = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

 return  <div className='favorites'>
    {favorites.length > 0 ? (   
        favorites.map ((book) => (
            <div key={book.id} className="book">
                <div>
                    <h4>{book.title}</h4>
                </div>
                <div>
                <div>
                    <img src={book.image_url} 
                    alt="#"  
                    onClick={() => navigate(`/books/${book.id}`)}/>
                </div>                </div>
                <div>
                    {favoritesChecher(book.id) ? (
                        <button onClick={() => removeFromFavorites(book.id)}>
                            Remove From Favorites
                        </button>
                    ): (
                        <button onClick={() => addToFavorites(book)}>
                            Add To Favorites
                        </button>
                    )}
                </div>
                </div>

        ))
    ) : (
        <h1> You dont't have any favorites book yet</h1>
    )}
</div>

};


export default  Favorites