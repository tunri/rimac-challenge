import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoneIcon from "@mui/icons-material/Done";

const ItemBenefit = ({ text }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <DoneIcon color="success" />
      </ListItemIcon>
      <ListItemText primary={text} primaryTypographyProps={{ color: "#676F8F" }} />
    </ListItem>
  )
};

export default ItemBenefit;