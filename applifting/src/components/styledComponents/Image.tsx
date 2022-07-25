import styled from "styled-components";
import { LoaderImage } from "../reusableComponents/loaderImage/LoaderImage";

const ProfileImage = styled(LoaderImage)`
  width: 37.5px;
  height: 37.5px;
  border-radius: 18.75px;
  object-fit: cover;
`;

const MediumImage = styled(LoaderImage)`
  width: 250px;
  height: 225px;
  object-fit: cover;
`;

const BigImage = styled(LoaderImage)`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export { BigImage, ProfileImage, MediumImage };
