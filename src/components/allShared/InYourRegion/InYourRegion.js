import "../../sidePanel/SidePanelStyles.css";
import "./InYourRegion.css";
import { getRegionUser } from "../../../utils/users/";
import { useEffect, useState } from "react";
const InYourRegion = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    let data = await getRegionUser(7);
    if (data) {
      data = data.slice(0, 15);
      setUsersData(data);
    } else {
      setUsersData([]);
    }
  };

  return (
    <div className="subsection-panel">
      <h3>Who&apos;s in your Region?</h3>
      <p>Connected neighbours:</p>
      <user-container>
        {usersData.map((user, index) => {
          return (
            <user-item key={index}>
              <img
                src={require(`../../../imgs/profiles/profile${
                  index + 1
                }.jpg`)}
                alt="Logo"
                className="fig-user-all"
              />
              <tool-tip>
                {user.user_name}
              </tool-tip>
            </user-item>
          );
        })}
      </user-container>
      <p>And many others!</p>
    </div>
  );
};

export default InYourRegion;
