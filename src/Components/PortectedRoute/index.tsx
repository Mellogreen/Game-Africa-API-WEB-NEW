import { Navigate, Outlet } from "react-router-dom"
import Header from "../Header"
import LoginPage from "../../LoginPage"

const ProtectedRoutes = () => {
  const logginUser = true

  if (!logginUser) return <Navigate to={"/login"} />

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default ProtectedRoutes
