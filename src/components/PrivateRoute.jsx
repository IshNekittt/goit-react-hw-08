import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import { Navigate } from "react-router";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <ContactsPage /> : <Navigate to="/" />;
}
