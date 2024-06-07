import { routes } from "consts";
import { useNavigate } from "react-router-dom";

export const appNavigation = {
  runSpinGame: routes.runSpinGame,
};

export const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    runSpinGame: {
      root: () => navigate(routes.runSpinGame),
    },
  };
};
