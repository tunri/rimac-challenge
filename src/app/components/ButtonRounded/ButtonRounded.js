import { Button } from "@mui/material";
import './ButtonRounded.scss';

const ButtonRounded = ({ children }) => {


  return (
    <Button className="button-rounded" variant="outlined">
      {children}
    </Button>
  )

}

export default ButtonRounded;