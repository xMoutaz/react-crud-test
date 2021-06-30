import React from 'react'

export default function SkillSelectDropdown(props) {
 
    function handleSkillChange(skill) {
        props.onSelect(skill);
    }

  return (
    <form>
        <label >Choose a skill:</label>
      <select 
        onChange={(event) => handleSkillChange(event.target.value)}
        value={props.currentSkill}>
        <option value="All">All</option>
        <option value="javascript">Javascript</option>
      </select>
    </form>
  )
}