import styled from "styled-components";
import { Form } from "formik";

import { BlockContainer } from "../../../../components/styledComponents/Container";
import { SmallButton } from "../../../../components/styledComponents/Button";

const CommentSectionContainer = styled(BlockContainer)`
  border-top: 1px solid #dfdfdf;
  padding-top: 20px;
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const StyledSmallButton = styled(SmallButton)`
  align-self: flex-end;
`;

export { CommentSectionContainer, StyledForm, StyledSmallButton };
