import { useCallback, useEffect, useState } from "react";
import AddUsers from "./AddUsers";
import RemoveUsers from "./RemoveUsers";
import SkillSelectDropdown from './SkillsFilter'
import ManageSkills from './SkillsManagement'
import "./Users.css";

const UsersTable = ({ children }) => (
  <div className="users-table">{children}</div>
);

const UsersTableHeader = () => (
  <div className="users-table__row">
    <div className="users-table__col-header">Id</div>
    <div className="users-table__col-header">Name</div>
    <div className="users-table__col-header"></div>
  </div>
);

const UserRow = ({ id, name , skills, refetch}) => (
  <div className="users-table__row">
    <div>{id}</div>
    <div>{name}</div>
     <ManageSkills props={{id: id,'skills':skills}} refetch={refetch}/>
  </div>
);

const fetchUsers = async (skill) => {
  const response = await fetch(`http://localhost:8081/users?skills=${skill}`);
  const { items } = await response.json();
  return items;
};

const UsersActions = ({ children }) => (
  <div className="users-actions">{children}</div>
);

export default function Users() {
  const [currentSkill, setCurrentSkill] = useState('All');

  const [users, setUsers] = useState([]);
  const loadUsers = useCallback(() => {
    fetchUsers(currentSkill).then(setUsers);
  }, [currentSkill]);
  useEffect(loadUsers, [loadUsers]);


  
  return (
    <div>
      <UsersTable>
      <SkillSelectDropdown onSelect={(val)=>{setCurrentSkill(val)}} currentSkill={ currentSkill }/>
        <UsersTableHeader />
        {users.map((user) => (
          <UserRow key={user.id} {...user} refetch={loadUsers}/>
        ))}
      </UsersTable>
      <UsersActions>
        <AddUsers refetch={loadUsers} />
        <RemoveUsers refetch={loadUsers} />
      </UsersActions>
    </div>
  );
}
