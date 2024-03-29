import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { useParams } from "react-router-dom"
import "./MovieList.css"

const MovieList = () => {
    const [MovieList, setMovieList] = useState([])
    const { type } = useParams();

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [type])

    const getData = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (

        <div className='movie__list'>
            <h2 className='list__title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className='list__cards'>
                {
                    MovieList.map((movie,idx) => (
                        <Card idx={Math.random()} movie={movie} />
                    ))
                }
            </div>
        </div> 

    )
}

export default MovieList

