import React from 'react'
import Godseyeimg from '../resources/imgs/googlelens.png'
import Googletransimg from '../resources/imgs/googletrans.png'
import { Link } from 'react-router-dom'
function Content() {
    return (
        <>
            <main className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-x-8 gap-y-10 px-5 py-2">
                    <Link to="/godseye">
                    <div className='h-15 w-40'>
                        <img src={Godseyeimg} alt="na" />
                        <h2>Godseye</h2>
                    </div>
                    </Link>
                    
                    <div className='h-15 w-40'>
                        <img src={Googletransimg} alt="na" />
                        <h2>Translate app</h2>
                    </div>
                    <div className='h-15 w-40'>
                        <img src={Googletransimg} alt="na" />
                        <h2>app3</h2>
                    </div>
                    <div className='h-15 w-40'>
                        <img src={Googletransimg} alt="na" />
                        <h2>app4</h2>
                    </div>
            </main>   
        </>
    )
}

export default Content
