import "./Feed.css";

const Feed = () => {
  return (
    <div className="mainfeed">
      <div className="feed-filter">
        <form className="feed-filter">
          <div>
            <input
              type="checkbox"
              id="general"
              value="General"
            />
            <label className="filter-general">
              General
            </label>
          </div>
          <div>
            <input type="checkbox" id="buysell" />
            <label className="filter-buysell">
              Buy and Sell
            </label>
          </div>
          <div>
            <input type="checkbox" id="alerts" />
            <label className="filter-alerts">
              Alerts
            </label>
          </div>
          <div>
            <input type="checkbox" id="traffic" />
            <label className="filter-traffic">
              Traffic
            </label>
          </div>
          <div>
            <input type="checkbox" id="all" />
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
