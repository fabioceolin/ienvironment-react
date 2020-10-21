import React from "react";
import { IconBaseProps } from "react-icons";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Header } from "./styles";

interface TabsProps {
  tabName: string;
  tabIcon: React.ComponentType<IconBaseProps>;
  tabContent: React.ReactElement<any>;
}

interface CustomTabsProps {
  headerColor: string;
  title: string;
  tabs: TabsProps[];
}

const useStyles = makeStyles(() => ({
  displayNone: {
    display: "none !important",
  },
  tabRootButton: {
    minHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    "&:last-child": {
      marginLeft: "0px",
    },
  },
  selectedTab: {
    backgroundColor: "#cc7300",
    transition: "background-color 0.2s",
  },
  tabWrapper: {
    display: "inline-block",
    alignItems: "center",
    fontSize: "12px",
    marginTop: "1px",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1px 5px 0 0 !important",
    },
  },
}));

const CustomTabs: React.FC<CustomTabsProps> = ({
  headerColor,
  title,
  tabs,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
  };

  return (
    <div>
      <Header color={headerColor}>
        {title !== undefined ? <div>{title}</div> : null}
        <Tabs
          classes={{ indicator: classes.displayNone }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.selectedTab,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </Header>
      <div>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CustomTabs;
