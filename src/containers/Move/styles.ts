import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background: #219091;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Round = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top:50%;
  right: -300px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export {
    Wrapper,
    Round
}