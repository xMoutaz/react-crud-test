import { useParams} from "react-router-dom";
import { useState, useCallback, useEffect  } from "react";
import { useHistory } from "react-router-dom";


const fetchUser = async (id) => {
  const response = await fetch(`https://workgenius-backend.herokuapp.com/users/${id}`);
  const user = await response.json();
  return user;
};

const addSkillsBulk = async (user) => {
  console.log('skill: '+user.skills);
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ skill: user.skills, id: user._id })
  };
await fetch("https://workgenius-backend.herokuapp.com/users", requestOptions);
};

const AttachSkill = (() => {
    const history = useHistory();
    const [skill, setSkill] = useState('');
    const { id } = useParams();
    const [user, setUser] = useState({skills: [], _id: id});

    const handleSubmit = (e) => {
      var skills = user.skills; 
      if(skills.includes(skill)) {e.preventDefault(); return;};
      skills.push(skill);
      e.preventDefault();
      setUser({skills: skills, _id:id});
      console.log(skill);
      console.log(user);
      addSkillsBulk(user).then(history.push('/'));
    };

    const loadUser = useCallback(() => {
      fetchUser(id).then(setUser);
    }, []);

  useEffect(loadUser, [loadUser]);

    return (
        <div className="create">
        <h2>Add a New Skill</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Number of users skills: {user.skills.length}</label>
          </div>
          <label>Skill Name:</label>
          <input 
            type="text" 
            required 
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <button>Add Skill</button>
        </form>
      </div>
    );
})

export default AttachSkill; 