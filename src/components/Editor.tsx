import { useState, useRef, useEffect } from 'react'
import { playVideo, pauseVideo, forwardVideo, setVideoTime, backwardVideo } from '../utils';
import * as VideoControl from "../components/VideoControls"


export default function Editor() {
    const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0)

    // ref that holds the original video element
    const defaultVideo = useRef<HTMLVideoElement>(null);
    // ref that holds the video element which will be processed
    const editedVideo = useRef<HTMLVideoElement>(null);

    /**
     * Html videos have an onTimeUpdate attribute that we can
     * use to automatically update the hook value which
     * stores the info about the current timestamp.
     * 
     * Thus, while the video is playing
     *    - `videoCurrentTime` is constantly updated to the current value
     *    - useEffect gets triggered when the `videoCurrentTime` gets updated
     *      and sets the timestamp of the second video to the same value.
     */
    useEffect(() => {
        setVideoTime(editedVideo, videoCurrentTime)
    }, [videoCurrentTime]);

    return (
        <div className=''>
            <div className='grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2'>

                {/* Original Video */}
                <div className='w-full'>
                    <div className='relative'>
                        <video width="100%" controls ref={defaultVideo}
                            onTimeUpdate={() => defaultVideo.current && setVideoCurrentTime(defaultVideo.current.currentTime)}
                        ><source src="/video.mp4" type="video/mp4" />
                        </video>
                        <div className='absolute top-0 right-0 bg-black/60 text-white py-1 px-4 font-mono fs-10 m-2 border-rad-3'>
                            {videoCurrentTime.toFixed(2)}
                        </div>
                    </div>
                </div>

                {/* Edited Video */}
                <div className='w-full'>
                    <video
                        width="100%"
                        ref={editedVideo}
                        onTimeUpdate={() => defaultVideo.current && setVideoCurrentTime(defaultVideo.current.currentTime)}>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Controls buttons grid (ideally converted into a seperate component) */}
            <div className='flex-center'>
                <div className='flex gap-1.5 mt-2.5'>
                    <button className='VideoControlButton' onClick={() => backwardVideo(defaultVideo)}>
                        <VideoControl.Backward />
                    </button>
                    <button className='VideoControlButton' onClick={() => playVideo(defaultVideo)}>
                        <VideoControl.Play />
                    </button>
                    <button className='VideoControlButton' onClick={() => pauseVideo(defaultVideo)}>
                        <VideoControl.Pause />
                    </button>
                    <button className='VideoControlButton' onClick={() => forwardVideo(defaultVideo)}>
                        <VideoControl.Forward />
                    </button>
                </div>
            </div>
        </div>
    )
}
