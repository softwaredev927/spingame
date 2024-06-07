import { Box, styled } from "@mui/material";

import { MOBILE_WIDTH, routes } from "consts";
import { StyledFlexRow } from "styles";
import {Page } from "wrappers";
import SpinWheelGame from "./SpinWheel";


export function SpinGame() {
  return (
    <Page hideBack={true}>
      <StyledContainer>
        <SpinWheelGame/>
      </StyledContainer>
    </Page>
  );
}


export default SpinGame;

const StyledStep = styled(Box)({
  flex: 1,
  [`@media (max-width: ${MOBILE_WIDTH}px)`]: {
    width: "100%",
  },
});
const StyledContainer = styled(StyledFlexRow)({
  gap: 20,
  alignItems: "flex-start",
  width: "100%",
  [`@media (max-width: ${MOBILE_WIDTH}px)`]: {
    flexDirection: "column",
  },
});
