import { useNavigate } from "react-router-dom"

function NotFound() {
  
  const navigate = useNavigate();

  return (
    <>
    <div>NotFound</div>
    <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}

export default NotFound