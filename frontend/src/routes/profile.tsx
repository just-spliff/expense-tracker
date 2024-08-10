import { createFileRoute } from "@tanstack/react-router";
import { api } from "../lib/api";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

async function getCurrentUser() {
  const res = await api.expenses["total-spent"].$get();
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  return data;
}

export const Route = createFileRoute("/profile")({
  component: Index,
});

function Index() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-current-user"],
    queryFn: getTotalSpent,
  });
}
function Profile() {}

