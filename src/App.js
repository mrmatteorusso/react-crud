import './App.css';
import './components/ListUser';
import './components/CreateUser';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>Crud operations using PHP API and mySQL</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">
                ListUser
              </Link>
            </li>
            <li>
              <Link to="user/create">
                Create User
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
