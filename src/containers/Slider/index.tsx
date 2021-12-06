import React, {useEffect} from "react";
import {Wrapper, Square, Block, Scroll, Text} from "./styles";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"

export const Slider = () => {
    gsap.registerPlugin(ScrollTrigger)
    const scroll = React.useRef(null)
    const square = React.useRef(null)
    const block = React.useRef(null)
    const text = React.useRef(null)
    const setAnimation = () => {
        let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: scroll.current,
                    scrub: true,
                    markers: true,
                    start: "top top",
                    end: 'bottom bottom'
                }
            }
        )
        timeline.to(square.current, {rotate: 360, duration: 1})
            .to(square.current, {left: '100%', duration: 1})
            .to(square.current, {left: '50%', duration: 1})
            .to(block.current, {right: 0, duration: 1}, '<')
            .to(square.current, {opacity: '0', duration: 0.5}, '<')
            .to(block.current, {width: '100%', duration: 1})
            .to(text.current, {opacity: 1, duration: 1})
    }
    useEffect(() => {
        setAnimation()
    }, [])
    return (
        <Wrapper ref={scroll}>
            <Scroll>
                <Square ref={square}/>
                <Block ref={block}/>
                <Text ref={text}>Шо там?</Text>
            </Scroll>
        </Wrapper>
    );
}