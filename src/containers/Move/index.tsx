import React, {useEffect, useRef} from 'react'
import {Wrapper, Round} from "./styles";
import {gsap} from "gsap";

export const Move = () => {

    const round1 = useRef(null);
    const round2 = useRef(null);
    const round3 = useRef(null);
    const round4 = useRef(null);

    const data = [
        {
            top: '40%',
            left: '50%',
            width: '150px',
            height: '150px',
        },
        {
            top: '40%',
            left: '40%',
            width: '150px',
            height: '150px',
        },
        {
            top: '50%',
            left: '10%',
            width: '400px',
            height: '400px',
        },
        {
            top: '70%',
            left: '50%',
            width: '150px',
            height: '150px',
        },
        {
            top: '50%',
            left: '70%',
            width: '150px',
            height: '150px',
        },
    ]

    const setAnimation = () => {
        let timeline = gsap.timeline()
        timeline.timeScale( 0.7 );
        timeline
        .to(round1.current, data[1])
        .to(round2.current, data[2])
        .to(round3.current, data[3])
        .to(round4.current, data[4])
        .call(setAnimation2)
    }

    const setAnimation2 = () => {
        let timeline = gsap.timeline({
               repeat: -1,
            }
        )
        timeline.timeScale( 0.2 );
        timeline
            .to(round1.current, data[2])
            .to(round2.current, data[3], '<')
            .to(round3.current, data[4], '<')
            .to(round4.current, data[1], '<')
            // .to(round4.current, data[1])
            .to(round1.current, data[3])
            .to(round2.current, data[4], '<')
            .to(round3.current, data[1], '<')
            .to(round4.current, data[2], '<')
            // .to(round4.current, data[2])
            .to(round1.current, data[4])
            .to(round2.current, data[1], '<')
            .to(round3.current, data[2], '<')
            .to(round4.current, data[3], '<')
            // .to(round4.current, data[3])
            .to(round1.current, data[1])
            .to(round2.current, data[2], '<')
            .to(round3.current, data[3], '<')
            .to(round4.current, data[4], '<')
            // .to(round1.current, data[1])



    }
    useEffect(() => {
        setAnimation()
    }, [])
    return (
        <Wrapper>
            <Round ref={round1}>
                <img src="https://picsum.photos/id/1018/500/500" alt="photo"/>
            </Round>
            <Round ref={round2}>
                <img src="https://picsum.photos/id/1015/500/500" alt="photo"/>
            </Round>
            <Round ref={round3}>
                <img src="https://picsum.photos/id/1025/500/500" alt="photo"/>
            </Round>
            <Round ref={round4}>
                <img src="https://picsum.photos/id/1029/500/500" alt="photo"/>
            </Round>
        </Wrapper>
    )
}