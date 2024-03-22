import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AddingModal from './components/AddingModal';
import NewProject from './components/NewProject';

function App() {
  const [projectID, setProjectID] = useState(undefined);
  const [projects, setProjects] = useState([]);

  function addToList(inputObject) {
    setProjects((prevData) => {
      return [...prevData, inputObject];
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
  }

  function handleAddNewProject() {
    setProjectID((prevValue) => {
      return null;
    });
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar projectsList={projects} onAddNewProject={handleAddNewProject} />
      {content}
    </main>
  );
}
export default App;
