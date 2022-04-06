import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 100%;
  padding: 200px;
`;
const Chart = styled.div`
  width: 800px;
  height: 300px;
  .g2-tooltip {
    box-shadow: none !important;
    background: none !important;
  }
  .tooltip {
    padding: 10px;
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0 8px 20px rgba(11, 50, 67, 0.08);
    &-date {
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      margin-bottom: 8px;
      color: #CCCCCC;
    }
    &-result {
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #414042;
      margin-bottom: 8px;
    }
    &-mentions {
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      text-decoration-line: underline;
      color: #87C289;
      cursor: pointer;
    }
  }
`;
const Tooltip = styled.div`
  padding: 10px;
  background: #FFFFFF;
  border-radius: 6px;
`;
const TooltipDate = styled.div`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  margin-bottom: 8px;
  color: #CCCCCC;
`;
const TooltipResult = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #414042;
  margin-bottom: 8px;
`;
const TooltipMentions = styled.div`
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  text-decoration-line: underline;
  color: #87C289;
  cursor: pointer;
`;
export {
    Wrapper ,Chart, Tooltip, TooltipDate, TooltipResult, TooltipMentions
}