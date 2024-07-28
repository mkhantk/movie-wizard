
function Home ({switchToGenre}) {
    return(
        <>
            <h1 className='text-6xl font-bold p-5 text-center'>Welcome!</h1>
            <p className='text-xl'>We created The Movie Wizard to help you find a movie to watch if you are not sure which movie to watch. 
            This Movie Wizrad will randomly pick a movie of your liking.
            You just have to pick a couple of genres and we'll do the rest for you.
            If you are ready, let's start right away.</p>
          
            <button onClick={switchToGenre} className="text-xl bg-violet-900 text-white px-10 py-3 rounded-full hover:bg-violet-300 hover:text-black">Start</button>
        </>
    )
}

export default Home;