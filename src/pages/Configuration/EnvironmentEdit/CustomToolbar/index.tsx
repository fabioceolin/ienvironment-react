import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

interface CustomToobarProps {
  tooltip: string;
  toggle(): void;
}

const CustomToolbar: React.FC<CustomToobarProps> = ({ tooltip, toggle }) => {
  return (
    <>
      <Tooltip title={tooltip}>
        <IconButton onClick={toggle}>
          <AddIcon fontSize="large" color="primary" />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default CustomToolbar;
