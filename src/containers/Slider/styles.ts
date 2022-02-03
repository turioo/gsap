import styled from 'styled-components/macro';
import {IStyles} from "./types";

const Wrapper = styled.div`
  top:0;
  left: 0;
  width: 100%;
  height: calc(5.5 * 100vh);
  background: #BC181E;
`;
const Scroll = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const Square = styled.div`
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 100px;
  height: 100px;
  z-index: 2;
  opacity: 0;
  svg {
    width: 100%;
    height: 100%;
    transform: translateY(36px);
    path {
      fill: white;
    }
  }
`;
const Block = styled.div`
  position: absolute;
  right: -50%;
  top: 0;
  width: 50%;
  height: 100%;
  background: #20212E;
`;
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-top: 20px;
    width: 100px;
    height: 100px;
  }
`;
const LogoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  opacity: 0;
`;
const MarqueeWrap = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Marquee = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  font-size: 0;
  display: flex;
  transform: rotate(-8deg);
  &:nth-child(1) {top: -20%}
  &:nth-child(2) {top: -10%}
  &:nth-child(3) {top: 0}
  &:nth-child(4) {top: 10%}
  &:nth-child(5) {top: 20%}
  &:nth-child(6) {top: 30%}
  &:nth-child(7) {top: 40%}
  &:nth-child(8) {top: 50%}
  &:nth-child(9) {top: 60%}
  &:nth-child(10) {top: 70%}
  &:nth-child(11) {top: 80%}
  &:nth-child(12) {top: 90%}
  &:nth-child(13) {top: 100%}

`;
const MarqueeText = styled.span`
  display: inline-block;
  white-space: nowrap;
  font-size: 100px;
  margin-right: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: #BC181E;
  -webkit-text-stroke: 1px #BC181E;
  -webkit-text-fill-color: transparent;
  animation: move 10s linear infinite;
  @keyframes move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
const LogosItem = styled.div`
  width: 25%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  transform: translateY(180px) scale(3);
  opacity: 0;
  svg {
    width: 100%;
    height: 90px;
  }
`;
const LogosWrap = styled.div<IStyles>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: fixed;
  top:0;
  left: 0;
  background: #20212E;
  opacity: 0;
`;
const Next = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-top: 20px;
    width: 100px;
    height: 100px;
  }
`;
const Redirect = styled.div`
  position: fixed;
  top: 100%;
  width: 100%;
  height: 100%;
  background: #BC181E;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  z-index: 7;
  font-weight: bold;
`;
export {
    Wrapper, Square, Block, Scroll, Text, LogoWrap, Marquee, MarqueeWrap, MarqueeText, LogosWrap, LogosItem, Redirect
}