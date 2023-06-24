import { Home, Explore, Bookmark, AccountCircle } from "@mui/icons-material";
import { Link } from "@mui/material";

const Header = (props) => {
  const classes = props.className + "";
  return (
    <header className={classes}>
      <nav>
        <Link className="p-4 w-full flex items-center gap-4 cursor-pointer border no-underline">
          <Home />
          <span className="text-blue-950">Home</span>
        </Link>
        <Link className="p-4 w-full flex items-center gap-4 cursor-pointer border no-underline">
          <Explore />
          <span className="text-blue-950">Explore</span>
        </Link>
        <Link className="p-4 w-full flex items-center gap-4 cursor-pointer border no-underline">
          <Bookmark />
          <span className="text-blue-950">Bookmarks</span>
        </Link>
        <Link className="p-4 w-full flex items-center gap-4 cursor-pointer border no-underline">
          <AccountCircle />
          <span className="text-blue-950">Profile</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
