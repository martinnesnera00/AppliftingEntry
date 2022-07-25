import styled from "styled-components";
import { Link } from "react-router-dom";
import { InlineContainer } from "../../styledComponents/Container";
import { LoaderImage } from "../loaderImage/LoaderImage";

interface LinkProps {
  selected: boolean;
}

const OuterContainer = styled.div`
  background-color: #f8f9fa;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

const InnerContainer = styled.div`
  height: 50px;
  display: flex;
  margin-inline: 15vw;
  align-items: center;
  justify-content: space-between;
`;

const LeftNavbarContainer = styled(InlineContainer)`
  align-items: center;
`;

const RightNavbarContainer = styled(InlineContainer)`
  align-items: center;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)<LinkProps>`
  text-decoration: none;
  color: ${(props) => (props.selected ? "black" : "grey")};
`;

const ProfileImage = styled(LoaderImage)`
  width: 37.5px;
  height: 37.5px;
  border-radius: 18.75px;
  object-fit: cover;
`;

export {
  OuterContainer,
  InnerContainer,
  StyledLink,
  LeftNavbarContainer,
  RightNavbarContainer,
  ProfileImage,
};
