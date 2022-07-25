import styled from "styled-components";

interface InputProps {
  isInvalid: boolean;
}

const StyledTextarea = styled.textarea<InputProps>`
  border: 1.5px ${(props) => (props.isInvalid ? "red" : "#DFDFDF")} solid;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  resize: none;
`;

export { StyledTextarea };
