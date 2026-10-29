import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "../components/LegalPageLayout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyRoute,
});

function PrivacyRoute() {
  return <LegalPageLayout initialTab="privacy" />;
}

