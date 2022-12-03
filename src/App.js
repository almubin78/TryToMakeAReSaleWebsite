
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import useModal from './hooks/useModal';
import router from './router/routes';

function App() {
  const {isShowing, toggle} = useModal();
  return (
    <div className="container ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
     
    </div>
  );
}

export default App;
