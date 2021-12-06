import styled from 'styled-components/macro';

const Wrapper = styled.div`
  top:0;
  left: 0;
  width: 100%;
  height: calc(5 * 100vh);
  background: aliceblue;
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
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: green;
  z-index: 2;
`;
const Block = styled.div`
  position: absolute;
  right: -50%;
  top: 0;
  width: 50%;
  height: 100%;
  background: #8d1167;
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
  opacity: 0;
`;
export {
    Wrapper, Square, Block, Scroll, Text
}