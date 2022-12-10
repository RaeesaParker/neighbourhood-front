import { useState } from "react";
import "./Feed.css";

const Feed = ({ setPostFilter }) => {
  const [postType, setPostType] = useState([
    true,
    true,
    true,
    true,
  ]);
  const [all, setAll] = useState(true);

  const optionClicked = (i) => {
    console.log(i);

    if (i == 4) {
      if (!all) {
        setPostType([true, true, true, true]);
        setPostFilter([true, true, true, true]);
      } else {
        setPostType([false, false, false, false]);
        setPostFilter([
          false,
          false,
          false,
          false,
        ]);
      }

      setAll(!all);
      return;
    }

    const temp = [...postType];
    temp[i] = !temp[i];

    if (temp === [true, true, true, true]) {
      setAll(true);
    } else {
      setAll(false);
    }

    setPostType(temp);
    setPostFilter(temp);
  };

  return (
    <div className="mainfeed">
      <div className="feed-filter">
        <form className="feed-filter">
          <div>
            <input
              type="checkbox"
              id="general"
              value="General"
              checked={postType[0]}
              onClick={() => optionClicked(0)}
            />
            <label className="filter-general">
              General
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="buysell"
              checked={postType[1]}
              onClick={() => optionClicked(1)}
            />
            <label className="filter-buysell">
              Buy and Sell
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="alerts"
              checked={postType[2]}
              onClick={() => optionClicked(2)}
            />
            <label className="filter-alerts">
              Alerts
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="traffic"
              checked={postType[3]}
              onClick={() => optionClicked(3)}
            />
            <label className="filter-traffic">
              Traffic
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="all"
              checked={all}
              onClick={() => optionClicked(4)}
            />
            <label className="filter-all">
              All
            </label>
          </div>
        </form>
      </div>
      <div className="feed-posts"></div>
    </div>
  );
};

export default Feed;
