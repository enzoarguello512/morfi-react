import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { selectCurrentToken, selectCurrentUser } from 'features/user/userSlice';
import { useAppSelector } from 'hooks/preTyped';

const RequireAuth = ({ allowedRoles }) => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  // If the user has sufficient permissions let him/her through
  return user?.permissionLevel & allowedRoles ? (
    <Outlet />
  ) : token ? (
    // Authenticated but without authorization to visit the route.
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    // In case the user is not authenticated
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
