import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AddingModal from './components/AddingModal';
import NewProject from './components/NewProject';
import ProjectPreview from './components/ProjectPreview';

function App() {
  const [projectID, setProjectID] = useState(undefined);
  const [projects, setProjects] = useState([]);
  let selectedProject = projects.find((project) => project.id === projectID);

  function selectProject(id) {
    setProjectID(id);
  }

  function addToList(inputObject) {
    setProjects((prevData) => {
      return [...prevData, inputObject];
    });
  }

  function deleteProject(id) {
    setProjectID(undefined);
    setProjects((prevData) => {
      return prevData.filter((project) => project.id !== id);
    });
  }

  function closeModal() {
    setProjectID(undefined);
  }

  let content;
  if (projectID === undefined) {
    content = <NewProject onAddNewProject={handleAddNewProject} />;
  } else if (projectID === null) {
    content = <AddingModal onAdd={addToList} onCloseModal={closeModal} />;
  } else if (projectID) {
    content = (
      <ProjectPreview
        selectedProject={selectedProject}
        onDelete={deleteProject}
      />
    );
  }

  function handleAddNewProject() {
    setProjectID((prevValue) => {
      return null;
    });
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        projectsList={projects}
        onAddNewProject={handleAddNewProject}
        onSelect={selectProject}
        selectedProject={projectID}
      />
      {content}
    </main>
  );
}
export default App;
