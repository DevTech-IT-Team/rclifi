import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "../components/LegalPageLayout";

export const Route = createFileRoute("/terms")({
  component: TermsRoute,
});

function TermsRoute() {
  return <LegalPageLayout initialTab="terms" />;
}

