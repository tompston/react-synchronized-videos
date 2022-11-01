// Play video that is attached to useRef
export function playVideo(vid: React.RefObject<HTMLVideoElement>) {
    vid.current && vid.current.play();
}
// Pause video that is attached to useRef
export function pauseVideo(vid: React.RefObject<HTMLVideoElement>) {
    vid.current && vid.current.pause();
}

// Forward a video that is attached to useRef
export function forwardVideo(vid: React.RefObject<HTMLVideoElement>, seconds: number = 1) {
    if (vid.current) {
        vid.current.currentTime += seconds
    }
}

// Backward a video that is attached to useRef
export function backwardVideo(vid: React.RefObject<HTMLVideoElement>, seconds: number = 1) {
    if (vid.current) {
        vid.current.currentTime -= seconds
    }
}

// Set the current timestamp of a 
export function setVideoTime(vid: React.RefObject<HTMLVideoElement>, time: number) {
    if (vid.current) {
        vid.current.currentTime = time
    }
}
