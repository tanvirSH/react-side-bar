
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytic from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import FileManager from './pages/FileManager';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Saved from './pages/Saved';
import Orders from './pages/Orders';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />}>Dashboard</Route>
            <Route path="/analytic" element={<Analytic />}>Analytic</Route>
            <Route path="/users" element={<Users />}>Users</Route>
            <Route path="/messages" element={<Messages />}>Messages</Route>
            <Route path="/fileManager" element={<FileManager />}>File Manager</Route>
            <Route path="/orders" element={<Orders />}>Orders</Route>
            <Route path="/saved" element={<Saved />}>Saved</Route>
            <Route path="/settings" element={<Settings />}>Settings</Route>
          </Routes>
        </Sidebar>
    </Router>
    </>
  );
}

export default App;
