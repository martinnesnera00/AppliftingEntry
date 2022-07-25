import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#6C757D" : "#007bff")};
  padding-block: 7.5px;
  padding-inline: 12.5px;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  color: white;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#6C757D" : " #40a9ff")};
  }
`;

const SmallButton = styled(Button)`
  padding-block: 2.5px;
  padding-inline: 5px;
`;

const UploadFileButton = styled.label`
  width: fit-content;
  color: #40a9ff;
  cursor: pointer;

  &:hover {
    color: #40a9ff;
  }
`;

const DeleteFileButton = styled.button`
  width: fit-content;
  color: red;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;

  &:hover {
    color: rgb(235, 84, 73);
  }
`;

export { Button, UploadFileButton, DeleteFileButton, SmallButton };
