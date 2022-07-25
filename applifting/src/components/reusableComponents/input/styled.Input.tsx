import styled from "styled-components";

interface InputProps {
  isInvalid: boolean;
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 1.5px ${(props) => (props.isInvalid ? "red" : "#DFDFDF")} solid;
  border-radius: 5px;
  padding: 5px;
`;

export { StyledInput };
