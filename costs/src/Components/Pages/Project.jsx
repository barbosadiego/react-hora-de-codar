import React from 'react';
import styles from './Project.css';
import { useParams } from 'react-router-dom';

const Project = (props) => {
  const { id } = useParams();
  const [project, setProject] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:5000/project/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <p>{project.name}</p>
    </div>
  );
};

export default Project;
