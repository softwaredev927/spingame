import Layout from "layout/Layout";
import _ from "lodash";
import { routes } from "consts";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import { useDevFeatures } from "hooks/hooks";
import { PageFallback } from "./fallbacks";
import { BadRoute } from "pages";

const SpinGame = lazy(() => import("pages/run-spin-game/SpinGame"));

export const useRouter = () => {
  const devFeatures = useDevFeatures();

  return useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: routes.runSpinGame,
              errorElement: <Navigate to={routes.runSpinGame} />,
              element: (
                <Suspense fallback={<PageFallback />}>
                  <SpinGame />
                </Suspense>
              ),
            },
          ],
          errorElement: (
            <Suspense fallback={<PageFallback />}>
              <BadRoute/>
            </Suspense>
          ),
        },
      ]),
    [devFeatures]
  );
};
