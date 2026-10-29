import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "../components/LegalPageLayout";

export const Route = createFileRoute("/legal")({
  component: LegalRoute,
});

function LegalRoute() {
  return <LegalPageLayout initialTab="privacy" />;
}

