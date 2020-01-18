import React, { useEffect } from 'react';

function Clipper({ src }){
    useEffect(() => {
        const audioClip = new Audio(src);
        audioClip.play();
        return function cleanup() {
            audioClip.pause()
        }
    })

    return <div>meh</div>;
}

export default Clipper;
