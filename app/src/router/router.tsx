import Layout from "layout/Layout";
import _ from "lodash";
import { routes } from "consts";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import { useDevFeatures } from "hooks/hooks";
import { DaoPageFallback, DaosPageFallback, PageFallback } from "./fallbacks";
import {
  BadRoute,
  CreateProposal,
  Dao,
  DaoAbout,
  DaosPage,
  EditProposal,
  Proposal,
  ProposalDisplay,
  ProposalsList,
} from "pages";

const CreateDao = lazy(() => import("pages/create-dao/CreateDao"));
const SpinGame = lazy(() => import("pages/run-spin-game/SpinGame"));
const DaoSettings = lazy(() => import("pages/dao/DaoSettings/DaoSettings"));

export const useRouter = () => {
  const devFeatures = useDevFeatures();

  return useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <SpinGame />,
          errorElement: (
            <Suspense fallback={<PageFallback />}>
              <BadRoute />
            </Suspense>
          ),
        },
      ]),
    [devFeatures]
  );
};
