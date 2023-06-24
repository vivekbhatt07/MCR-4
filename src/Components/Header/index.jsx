import { Home, Explore, Bookmark, AccountCircle } from "@mui/icons-material";
import { Link } from "@mui/material";
import { useData } from "../../context/DataContext";

const Header = (props) => {
  const { state } = useData();
  const classes = props.className + " flex flex-col justify-between";
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
      <div className="flex gap-4 px-3 py-2">
        <div className="w-10 h-10 rounded-full">
          <img
            src={state.formList[0].picUrl}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{state.formList[0].name}</span>
          <span className="text-sm">@{state.formList[0].username}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
