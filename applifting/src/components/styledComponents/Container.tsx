import styled from "styled-components";

const ASIDE_WIDTH = 25;

interface MainContainerProps {
  withRightMargin?: boolean;
}

interface FlexContainerProps {
  spacing?: "small" | "medium" | "big" | "none";
  verticalAlign?: "top" | "center" | "bottom";
  horizontalAlign?: "left" | "center" | "right";
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const FlexContainer = styled.div<FlexContainerProps>`
  flex: 1;
  display: flex;
  ${(props) => (props.fullHeight ? "height: 100%;" : null)}
  ${(props) => (props.fullWidth ? "width: 100%;" : null)}
`;

const Main = styled.main<MainContainerProps>`
  margin-right: ${(props) => (props.withRightMargin ? ASIDE_WIDTH + 1.5 : 0)}vw;
  overflow-wrap: break-word;

  @media only screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;

const Aside = styled.aside`
  position: fixed;
  width: ${ASIDE_WIDTH}vw;
  top: 90px;
  right: 0;
  margin-right: 15vw;
  overflow-wrap: break-word;
  border-left: 1px solid #dfdfdf;
  padding-left: 20px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const InlineContainer = styled(FlexContainer)`
  flex-direction: row;
  justify-content: ${(props) =>
    props.horizontalAlign === "center"
      ? "center"
      : props.horizontalAlign === "right"
      ? "flex-end"
      : "flex-start"};
  align-items: ${(props) =>
    props.verticalAlign === "center"
      ? "center"
      : props.verticalAlign === "bottom"
      ? "flex-end"
      : "flex-start"};
  gap: 17.5px;
`;

const BlockContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: ${(props) =>
    props.horizontalAlign === "center"
      ? "center"
      : props.horizontalAlign === "right"
      ? "flex-end"
      : "flex-start"};
  justify-content: ${(props) =>
    props.verticalAlign === "center"
      ? "center"
      : props.verticalAlign === "bottom"
      ? "flex-end"
      : "flex-start"};
  gap: ${(props) =>
    props.spacing === "small"
      ? 5
      : props.spacing === "medium"
      ? 20
      : props.spacing === "big"
      ? 35
      : 0}px;
`;

export { InlineContainer, BlockContainer, Aside, Main };
