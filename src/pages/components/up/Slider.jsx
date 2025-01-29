import { useSelector } from 'react-redux';
import arrow from './img/Vector.png';
import { useRef } from 'react';

export function Slider() {
    const state = useSelector((state) => state.data);
    const moveRef = useRef()

    let offset = 0;
    
    const slider = () => {
        offset += 276;
        if (offset > 1024) {
            offset = 0;
        }
        moveRef.current.style.transform = `translateX(${-offset}px)`;
    };

    return (
        <div className='main-block'>
            <div className='current-block'>
                <div ref={moveRef} className='move-block'>
                    {state[0].films.map((item) => (
                        <img src={item.posterUrlPreview} alt='#' />
                    ))}
                </div>
            </div>
            <img onClick={slider} style={{ display: 'block', cursor: 'pointer'}} src={arrow} alt='arrow' />
        </div>
    );
}
