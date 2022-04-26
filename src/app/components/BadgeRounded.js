import Box from "@mui/material/Box";
const BadgeRounded = ({ children, color, sxx, }) => {

  const getColor = (c, t) => {
    if (t.palette[c]) return t.palette[c].main;

    return c;
  }

  return (
    <Box component='span' sx={{
      width: 24,
      height: 24,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: t => getColor(color, t),
      color: t => getColor(color, t),
      borderRadius: '50%',
      ...sxx
    }}>
      {children}
    </Box>
  )
}

export default BadgeRounded;