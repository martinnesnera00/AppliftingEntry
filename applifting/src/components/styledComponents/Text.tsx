import styled from "styled-components";

interface TextProps {
  size?: "small" | "medium" | "big";
  bold?: boolean;
}

const H1 = styled.h1`
  margin: 0px;
  overflow-wrap: anywhere;
`;

const H2 = styled.h2`
  margin-top: 10px;
  margin: 0px;
  overflow-wrap: anywhere;
`;

const H3 = styled.h3`
  margin-top: 5px;
  margin: 0px;
  overflow-wrap: anywhere;
`;

const H4 = styled.h4`
  margin: 0px;
  overflow-wrap: anywhere;
`;

const Label = styled.div`
  margin-top: 5px;
  font-size: 15px;
  overflow-wrap: anywhere;
`;

const Text = styled.div<TextProps>`
  overflow-wrap: anywhere;
  font-size: ${(props) =>
    props.size === "big" ? 14 : props.size === "small" ? 12 : 13}px;
  ${(props) => (props.bold ? "font-weight: bold;" : null)}
`;

export { H1, H2, H3, Label, H4, Text };
