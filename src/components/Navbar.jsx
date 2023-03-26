import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', 
        background: '#000', 
        justifyContent: 'space-between',
        top: 0 }}
    >

      <Link to="/" style={{display: 'flex',
            alignItems: 'center'}}>
        <img src={logo} alt="ytlogo" height={50} />
      </Link>
      <SearchBar />
  </Stack> 
)

export default Navbar