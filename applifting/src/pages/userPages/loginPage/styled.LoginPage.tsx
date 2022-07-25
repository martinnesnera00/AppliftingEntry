import styled from "styled-components";

import { Main } from "../../../components/styledComponents/Container";
import { Button } from "../../../components/styledComponents/Button";

const StyledMain = styled(Main)`
  display: flex;
  justify-content: center;
`;

const LoginFormContainer = styled.div`
  width: 40%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.175);
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export { LoginFormContainer, StyledMain, StyledButton };
