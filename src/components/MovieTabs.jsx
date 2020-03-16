import React from "react";

class MovieTabs extends React.Component {

  componentWillReceiveProps (nextProps, nextState) {

    console.log('MovieTabs WillReceiveProps');
    console.log('nextProps sort_by', nextProps.sort_by);
    console.log('prevProps sort_by', this.props.sort_by);

  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value) => () => {
      updateSortBy(value);
    };

    const getClassLink = (value) => {
      return `nav-link ${this.props.sort_by === value ? "active" : ""}`;
    };

    console.log('MovieTabs render')

    return (
      <ul className="tabs nav nav-pills" >
        <li className="nav-item">
          <div
            className={getClassLink('popularity.desc')}
            onClick={handleClick('popularity.desc')}>
            Popularity desk
          </div>

        </li>
        <li className="nav-item">
          <div
            className={getClassLink('revenue.desc')}
            onClick={handleClick('revenue.desc')}>
            Revenue desk
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassLink('vote_average.desc')}
            onClick={handleClick('vote_average.desc')}>
            Vote average desk
          </div>
        </li>
      </ul>
    );
  }
}

// const MovieTabs = (props) => {


// };

export default MovieTabs;

