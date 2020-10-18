import React from 'react';
import { quotes } from './quotes';
import './main.scss'

const Main = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setIndex(Math.floor(Math.random() * quotes.length));
    }, [])

    return (
        <div className="main col-lg-8 col-md-7 d-flex flex-column justify-content-center align-items-center m-0">
            <h1 className="text-light text-center">Hello, I am</h1>
            <h1 className="text-light text-center">Razeen Shaikh</h1>
            <p className="text-light text-center">A Web Developer</p>
            {quotes &&
                <div className="quote-box">
                    <h3 className="text-center">{quotes[index].quote}</h3>
                    <p className="text-right">- {quotes[index].author}</p>
                </div>
            }
        </div>
    )
}

export default Main