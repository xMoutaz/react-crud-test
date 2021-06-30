import React, { useCallback } from "react";

const manageSkillsBulk = async (input) => {
  console.log(!!input.props.skills.length);
    var skills = input.props.skills.length? []: ['javascript'] ;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skill: skills, id: input.props.id })
    };
  await fetch("http://localhost:8081/users", requestOptions);
};

export default function ManageSkills(input) {
  const onClick = useCallback(() => {
        manageSkillsBulk(input).then(input.refetch);
  }, [input.refetch]);
  return (
    <div className="skillButton">
        { !!input.props.skills.length? 
        <button onClick={onClick}>Remove JS skill</button>: 
        <button onClick={onClick}>Add JS skill</button>}
    </div>
  );
}
