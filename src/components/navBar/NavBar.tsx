import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="flex gap-4 mb-4">
      <h1>NavBar</h1>
      <Link to="/home">Home</Link>
    </div>
  )
}