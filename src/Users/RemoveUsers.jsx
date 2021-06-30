import React, { useCallback } from "react";

const deleteUsersBulk = async () => {
  await fetch("http://localhost:8081/users", {
    method: "DELETE",
  });
};

export default function RemoveUsers({ refetch }) {
  const onClick = useCallback(() => {
    deleteUsersBulk().then(refetch);
  }, [refetch]);
  return <button onClick={onClick}>Remove Users</button>;
}
