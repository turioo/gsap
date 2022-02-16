import React, {useEffect, createRef, useState} from "react";
import {Wrapper, Square, Block, Scroll, Text, LogoWrap, Marquee, MarqueeWrap, MarqueeText, LogosWrap, LogosItem, Redirect} from "./styles";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {ReactComponent as Mouse} from "assets/icons/mouse.svg";
import {ReactComponent as Hand} from "assets/icons/hand.svg";
import {ReactComponent as Logo} from "assets/icons/logo.svg";
import {ReactComponent as KS} from "assets/logos/ks.svg";
import {ReactComponent as Lion} from "assets/logos/lion.svg";
import {ReactComponent as Lenovo} from "assets/logos/lenovo.svg";
import {ReactComponent as TicTac} from "assets/logos/ticatac.svg";

export const Slider = () => {
    gsap.registerPlugin(ScrollTrigger)
    const scroll = React.useRef(null)
    const hand = React.useRef(null)
    const text = React.useRef(null)
    const block = React.useRef(null)
    const logo = React.useRef(null)
    const marquee = React.useRef(null)
    const marqueeText = React.useRef([]);
    const logos = React.useRef(null)
    const redirect = React.useRef(null)

    const [isActive, setActive] = useState('')

    let things: string[] = []

    let runText1 = 'Design Development Production'
    let runText2 = 'Development Production Design'
    let runText3 = 'Production Design Development '

    for (let i = 1; i <= 13; i++) {
       if ( i%2) {
           things.push(runText1);
       }
        else if ( i%3) {
            things.push(runText2);
        }
        else {
           things.push(runText3);
       }
    }
    marqueeText.current = things.map((element, i) => marqueeText.current[i] ?? createRef());
    const RedirectFunc = () => {
        window.location.href='https://hexide-digital.com/'
    }
    const setAnimation = () => {
        let timeline = gsap.timeline({
                repeat: -1,
                scrollTrigger: {
                    trigger: scroll.current,
                    scrub: true,
                    markers: true,
                    start: "top top",
                    end: 'bottom bottom',
                },
            }
        )
        timeline
            .to(text.current, {opacity: 0, duration:1})
            .to(hand.current, {opacity: 1, duration: 1})
            .to(hand.current, {left: '100%', duration: 1})
            .to(hand.current, {left: '50%', duration: 1})
            .to(block.current, {right: 0, duration: 1}, '<')
            .to(marquee.current, {opacity: 1, duration:1}, '<')
            .to(block.current, {width: '100%', duration: 1})
            .to(hand.current, {left: -15, duration: 1}, '<')
            .to(hand.current, {opacity: 0, duration:1})
            .to(marquee.current, {opacity: 0, duration:1})
            .to(logo.current, {opacity: 1, duration: 1})
            .to(logo.current, {scale: 1.5, duration: 1})
            .to(logos.current, {opacity: 0, duration: 1})
            .to(logos.current, {opacity: 1, duration: 1})
            .staggerTo('.logo',1,{y:0, scale:1, opacity: 1, ease: 'easeInOut'}, 1)
            .staggerTo('.logo',1,{opacity: 0, ease: 'easeInOut'}, 1)
            .to(redirect.current, {top: 0, duration: 1})
            .call(RedirectFunc)

    }
    useEffect(() => {
        setAnimation()
    }, [])
    return (
        <Wrapper ref={scroll}>
            <Scroll>
                <Text ref={text}>Just scroll <Mouse /></Text>
                <Square ref={hand}>
                    <Hand />
                </Square>
                <Block ref={block}/>
                <LogoWrap ref={logo}><Logo /></LogoWrap>
                <MarqueeWrap ref={marquee}>
                    {things.map((element, i) => (<Marquee>
                        <MarqueeText ref={marqueeText.current[i]}>{element}</MarqueeText>
                        <MarqueeText ref={marqueeText.current[i]}>{element}</MarqueeText>
                    </Marquee>))}
                </MarqueeWrap>
                <LogosWrap ref={logos} className={isActive}>
                    <LogosItem className="logo">
                        <KS />
                    </LogosItem>
                    <LogosItem className="logo">
                        <Lion />
                    </LogosItem>
                    <LogosItem className="logo">
                        <Lenovo />
                    </LogosItem>
                    <LogosItem className="logo">
                        <TicTac />
                    </LogosItem>
                </LogosWrap>
                <Redirect ref={redirect}>Let`s get in second!</Redirect>
            </Scroll>
        </Wrapper>
    );
}