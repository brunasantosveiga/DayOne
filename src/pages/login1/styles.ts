import styled from "styled-components";

export const Container = styled.div`
  background-color: #efefef;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
`;
export const DivMain = styled.div`
  width: 584px;
  height: 577px;
  background-color: #fff;
  box-shadow: 0px 44px 104px rgba(19, 43, 80, 0.1);
  border-radius: 16px;
  padding: 85px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 32px;
  }
  div {
    display: flex;
  }
`;
export const RightArea = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #132b50;
  }
`;
export const Img = styled.img`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  margin-right: 16px;
`;
export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #132b50;
`;
