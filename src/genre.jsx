import { useState } from "react";

function Genre ({switchToResult, setGenres}) {
    const [glist,setGlist] = useState([])
    // let glist = []

    const handleClick = (e) => {
        if (glist.includes(e.target.textContent)) {
            // console.log(glist)
            // console.log(glist.indexOf(e.target.textContent))
            // glist.splice(glist.indexOf(e.target.textContent),1)

            setGlist(glist.filter(item => item !== e.target.textContent));
            document.getElementById(e.target.textContent).classList.remove('ring-glist')
        } else {
            // glist[glist.length] = e.target.textContent
            // console.log({glist})

            setGlist([...glist, e.target.textContent]);
            document.getElementById(e.target.textContent).classList.add('ring-glist')
        }
        // console.log(e.target.textContent)
        
        
    }
    const handleContinue = () => {
        if (glist.length > 0) {
            setGenres(glist);
            switchToResult();
        }
        
        // console.log(glist)
    };

    return (
        <>
            <h1 className="text-4xl font-bold">Genres</h1>
            <p>select at least one genre!</p>
            <ul className="flex flex-wrap justify-center gap-5 ">
                <li><button id="Action" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Action</button></li>
                <li><button id="Adventure" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Adventure</button></li>
                <li><button id="Comedy" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Comedy</button></li>
                <li><button id="Drama" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Drama</button></li>
                <li><button id="Horror" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Horror</button></li>
                <li><button id="Sci-Fi" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Sci-Fi</button></li>
                <li><button id="Fantasy" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Fantasy</button></li>
                <li><button id="Romance" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Romance</button></li>
                <li><button id="Thriller" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Thriller</button></li>
                <li><button id="Mystery" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Mystery</button></li>
                <li><button id="Documentary" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Documentary</button></li>
                <li><button id="Animated" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Animated</button></li>
                <li><button id="Crime" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Crime</button></li>
                <li><button id="War" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">War</button></li>
                <li><button id="Music" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Music</button></li>
                <li><button id="Family" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Family</button></li>
                <li><button id="History" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">History</button></li>
                <li><button id="Western" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">Western</button></li>
                <li><button id="TV-Movie" onClick={handleClick} className="p-5 bg-indigo-400 text-black text-lg rounded-md w-[10rem] hover:bg-indigo-500 active:bg-indigo-950 active:text-white">TV-Movie</button></li>

            </ul>

            <button onClick={handleContinue}  className="text-xl bg-violet-900 text-white px-10 py-3 rounded-full hover:bg-violet-300 hover:text-black">Continue</button>

        
        </>
    )
}

export default Genre;