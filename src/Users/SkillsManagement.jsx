import React from "react";
import { Link } from 'react-router-dom';


export default function ManageSkills(input) {

  return (
      <Link to={`/attach-skill/${input.props.id}`}>
        <div className="skillButton">
        <button className='skillButton'>Attach Skill</button>
        </div>
      </Link>
  );
}
