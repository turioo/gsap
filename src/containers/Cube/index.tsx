import React, {useEffect} from "react";
import {Container, CubeEl, Face, Text, Wrapper} from "./styles";

import Logo from "../../assets/icons/logo.svg";
import KS from "../../assets/logos/ks.svg";
import Lion from "../../assets/logos/lion.svg";
import Lenovo from "../../assets/logos/lenovo.svg";
import TicTac from "../../assets/logos/ticatac.svg";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ReactComponent as Mouse} from "../../assets/icons/mouse.svg";

export const Cube = () => {

    const wrapper = React.useRef(null)
    const container = React.useRef(null)
    const cube = React.useRef(null)

    gsap.registerPlugin(ScrollTrigger)
    const setAnimation = () => {
      gsap.to(cube.current, {
          scrollTrigger: {
              trigger: wrapper.current,
              scrub: true,
              markers: false,
              start: "top top",
              end: 'bottom bottom',
          },
          scale:3,
      })
    }
    useEffect(() => {
        setAnimation()
    }, [])
    return (
        <Wrapper ref={wrapper}>
            <Container>
                <CubeEl ref={cube}>
                    <Face src={Logo} />
                    <Face src={Lenovo} />
                    <Face src={KS} />
                    <Face src={Lion} />
                    <Face src={TicTac} />
                    <Face src={Logo} />
                </CubeEl>
            </Container>
            <Text>scroll <Mouse /></Text>
        </Wrapper>
    );
}