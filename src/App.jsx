import Sidebar from './components/Sidebar';
import AddingModal from './components/addingModal';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar />
      <AddingModal />
    </main>
  );
}

export default App;
