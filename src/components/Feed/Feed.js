import "./Feed.css";

const Feed = () => {
  return (
    <div className="mainfeed">
      <div className="feed-filter">
        <form className="feed-filter">
          <input
            type="checkbox"
            id="general"
            value="General"
          />
          <label className="filter-general">
            General
          </label>
          <input type="checkbox" id="alerts" />
          <label className="filter-alerts">
            Alerts
          </label>
          <input type="checkbox" id="buysell" />
          <label className="filter-buysell">
            Buy and Sell
          </label>
          <input type="checkbox" id="traffic" />
          <label className="filter-traffic">
            Traffic
          </label>
          <input type="checkbox" id="all" />
          <label className="filter-all">
            All
          </label>
        </form>
      </div>
      <div className="feed-posts"></div>
    </div>
  );
};

export default Feed;
