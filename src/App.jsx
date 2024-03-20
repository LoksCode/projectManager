import { useState } from 'react';
import Sidebar from './components/Sidebar';
import AddingModal from './components/AddingModal';
import NewProject from './components/NewProject';

function App() {
  const [projectsList, setProjectList] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  let content;
  if (projectsList.selectedProjectId === undefined) {
    content = <NewProject onAddNewProject={handleAddNewProject} />;
  } else if (projectsList.selectedProjectId === null) {
    content = <AddingModal />;
  }

  function handleAddNewProject() {
    setProjectList((prevValue) => {
      return { ...projectsList, selectedProjectId: null };
    });
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        projectsList={projectsList.projects}
        onAddNewProject={handleAddNewProject}
      />
      {content}
    </main>
  );
}
export default App;
