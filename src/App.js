
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/routes';

function App() {
  return (
    <div className="text-primary">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
