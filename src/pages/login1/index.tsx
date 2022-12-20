import * as Styled from "./styles";
import ciri from "../../images/ciri.jpeg";

export const Login1 = () => {
  return (
    <Styled.Container>
      <Styled.DivMain>
        <Styled.Div>
          <h1>Enter your password</h1>
          <div>
            <Styled.Img src={ciri} />
            <Styled.RightArea>
              <h2>Business Account</h2>
              <Styled.Name>Ciri laina</Styled.Name>
            </Styled.RightArea>
          </div>
        </Styled.Div>
      </Styled.DivMain>
    </Styled.Container>
  );
};
