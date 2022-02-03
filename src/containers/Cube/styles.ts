import styled from 'styled-components/macro';

const Wrapper = styled.div`
  top:0;
  left: 0;
  width: 100%;
  height: calc(3 * 100vh);
  background: #BC181E;
`;

const Container = styled.div`
  left:50%;
  top:0;
  transform:translate(-50%, 100%);
  position: fixed;
  width: 100px;
  margin: 50px;
  -webkit-perspective: 600px;
  perspective: 600px;
`;
const CubeEl = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto;
  position: relative;
  color: #111;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform: scale(1);
  @keyframes animate1 {
    0% {
      transform: perspective(600px) rotateX(0deg) rotateY(90deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(600px) rotateX(360deg) rotateY(450deg) rotateZ(0deg);
    }
  }

  @keyframes animate2 {
    0% {
      transform: perspective(600px) rotateX(0deg) rotateY(270deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(600px) rotateX(360deg) rotateY(630deg) rotateZ(0deg);
    }
  }

  @keyframes animate3 {
    0% {
      transform: perspective(600px) rotateX(90deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(600px) rotateX(450deg) rotateY(0deg) rotateZ(-360deg);
    }
  }

  @keyframes animate4 {
    0% {
      transform: perspective(600px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(600px) rotateX(270deg) rotateY(0deg) rotateZ(360deg);
    }
  }

  @keyframes animate5 {
    0% {
      transform: perspective(600px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(600px) rotateX(360deg) rotateY(360deg) rotateZ(0deg);
    }
  }

  @keyframes animate6 {
    0% {
      transform: perspective(600px) rotateX(0deg) rotateY(180deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(600px) rotateX(360deg) rotateY(540deg) rotateZ(0deg);
    }
  }
`;
const Face = styled.img`
  background: #20212E;
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 3em;
  font-weight: bold;
  transform-origin: 50% 50% -50px;
  -webkit-transform-origin: 50% 50% -50px;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  &:nth-child(1) {
    animation: animate1 12s infinite linear;
  }

  &:nth-child(2) {
    animation: animate2 12s infinite linear;
  }

  &:nth-child(3) {
    animation: animate3 12s infinite linear;
  }

  &:nth-child(4) {
    animation: animate4 12s infinite linear;
  }

  &:nth-child(5) {
    animation: animate5 12s infinite linear;
  }

  &:nth-child(6) {
    animation: animate6 12s infinite linear;
  }

`;
const Text = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-top: 20px;
    width: 100px;
    height: 100px;
  }
`;
export {
    Container, CubeEl, Face, Text, Wrapper
}