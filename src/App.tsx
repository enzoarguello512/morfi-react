import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import RequireAuth from 'components/RequireAuth/RequireAuth';
//import PersistLogin from 'components/PersistLogin/PersistLogin';

// Pages
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Chat from './pages/Chat/Chat';
import Cart from 'pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import Product from 'pages/Product/Product';
import UserProfile from 'pages/UserProfile/UserProfile';

// Rol
import { ERoles } from 'common/types/common.roles.enum';

function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<PersistLogin />}>*/}
      {/* public routes */}
      <Route index element={<Shop />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      {/* protected routes */}
      <Route element={<RequireAuth allowedRoles={ERoles.FREE} />}>
        <Route path="chat" element={<Chat />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>

      <Route path="product/:productId" element={<Product />} />

      {/* Catch all - replace with 404 component if you want */}
      <Route path="*" element={<Navigate to="/" replace />} />
      {/*</Route>*/}
    </Routes>
  );
}

export default App;
