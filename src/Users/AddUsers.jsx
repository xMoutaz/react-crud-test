import React, { useCallback } from "react";

const addUsersBulk = async () => {
  await fetch("https://workgenius-backend.herokuapp.com/users", {
    method: "POST",
  });
};

export default function AddUsers({ refetch }) {
  const onClick = useCallback(() => {
    addUsersBulk().then(refetch);
  }, [refetch]);
  return <button onClick={onClick}>Add Users</button>;
}
