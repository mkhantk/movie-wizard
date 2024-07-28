import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

const genreMap = {
    "Action": 28,
    "Adventure": 12,
    "Animated": 16,
    "Comedy": 35,
    "Crime": 80,
    "Documentary": 99,
    "Drama": 18,
    "Family": 10751,
    "Fantasy": 14,
    "History": 36,
    "Horror": 27,
    "Music": 10402,
    "Mystery": 9648,
    "Romance": 10749,
    "Sci-Fi": 878,
    "TV-Movie": 10770,
    "Thriller": 53,
    "War": 10752,
    "Western": 37
};

function Result ({genre, switchToHome}) {
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [overview, setOverview] = useState('Loading...')
    const [resultData, setResultData] = useState()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)

    //now we gonna map genremap and genre to filter out the selected genre. 
    // console.log(genre)

    // console.log(Object.key(Object.value('Action')))
    const getGenreIDs = (genre, genreMap) => {
        return genre.map(item => genreMap[item]).filter(key => key !== undefined)
    }

    const genreIDs = useMemo(() => getGenreIDs(genre, genreMap), [genre]) 
    console.log(genreIDs)
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/discover/movie',
                    params: {
                        include_adult: 'false',
                        include_video: 'false',
                        language: 'en-US',
                        page: currentPage,
                        sort_by: 'popularity.desc',
                        with_genres: genreIDs.join()
                    },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQ4MTRlYTllYThlZTExNzVhOTM5MWMyMjE2NmQ0ZiIsIm5iZiI6MTcyMjAxMTU0NS4wNjQyNzQsInN1YiI6IjY2YTNjYzIwODI4ODc2MGJhYmQxOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f-Y5pHHduD_F8E75TxBtBx0FgCwKQYcN38mtVm74FpU'
                    }
                };
                
                const response = await axios.request(options);
                setResultData(response.data.results);
                // console.log(response.data.page)
                
                if (response.data.results.length > 0) {
                    const firstMovie = response.data.results[0];
                    setTitle(firstMovie.title);
                    setPoster(firstMovie.poster_path);
                    setOverview(firstMovie.overview);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, [genreIDs]);

    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         try {
    //             const options = {
    //                 method: 'GET',
    //                 url: 'https://api.themoviedb.org/3/discover/movie',
    //                 params: {
    //                     include_adult: 'false',
    //                     include_video: 'false',
    //                     language: 'en-US',
    //                     page: currentPage,
    //                     sort_by: 'popularity.desc',
    //                     with_genres: genreIDs.join()
    //                 },
    //                 headers: {
    //                     accept: 'application/json',
    //                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQ4MTRlYTllYThlZTExNzVhOTM5MWMyMjE2NmQ0ZiIsIm5iZiI6MTcyMjAxMTU0NS4wNjQyNzQsInN1YiI6IjY2YTNjYzIwODI4ODc2MGJhYmQxOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f-Y5pHHduD_F8E75TxBtBx0FgCwKQYcN38mtVm74FpU'
    //                 }
    //             };
                
    //             const response = await axios.request(options);
    //             setResultData(response.data.results);
                
    //             if (response.data.results.length > 0) {
    //                 const firstMovie = response.data.results[0];
    //                 setTitle(firstMovie.title);
    //                 setPoster(firstMovie.poster_path);
    //                 setOverview(firstMovie.overview);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchMovies();
    // }, [currentPage]);

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = (prevIndex + 1) % resultData.length;
            const nextMovie = resultData[newIndex];
            setTitle(nextMovie.title);
            setPoster(nextMovie.poster_path);
            setOverview(nextMovie.overview);
            return newIndex;
        });
    };

    // further improvement needed. I gotta make the api fetch another page when i click.
    // const handleAgain = () => {
    //     setCurrentPage(prevPage => prevPage + 1)
    // }

    // console.log(currentPage)
    // console.log()
    return (
        <>
            <div className='container grid grid-cols-3 gap-5 p-3'>
                <div className='row-span-2 mb-auto'>{poster && <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />}</div>
                <div className='col-span-2 text-xl font-bold'>{title}</div>
                <div className='col-span-2 text-lg'>{overview}</div>
            </div>
            <div className='flex gap-5'>
                <button onClick={switchToHome} className="text-xl bg-violet-900 text-white px-10 py-3 rounded-full hover:bg-violet-300 hover:text-black">Home</button>
                {/* <button onClick={handleAgain} className="text-xl bg-violet-900 text-white px-10 py-3 rounded-full hover:bg-violet-300 hover:text-black">Again</button> */}
                <button onClick={handleNext} className="text-xl bg-violet-900 text-white px-10 py-3 rounded-full hover:bg-violet-300 hover:text-black">Next</button>
            </div>
            
        </>
    )
}

export default Result;