import { styled } from "@mui/material";
import { LoadingContainer } from "components";
import { useMobile } from "hooks/hooks";
import { StyledFlexColumn, StyledFlexRow } from "styles";

export const PageFallback = () => {
  return (
    <StyledContainer>
      <LoadingContainer loaderAmount={5} />
    </StyledContainer>
  );
};


const StyledLeft = styled(LoadingContainer)({
  width: 300,
});

const StyledRight = styled(LoadingContainer)({
  flex: 1,
  width: "auto",
});

const StyledContainer = styled(StyledFlexColumn)({
  height: "100vh",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  paddingTop: 20
});
