import { createFileRoute } from "@tanstack/react-router";
import { ParkApp } from "@/components/park-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ParkApp />;
}
