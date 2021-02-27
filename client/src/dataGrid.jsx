
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
///////////////////////////////////////////////////////////////////////////////
// SETUP: DEPENDENCIES AND CONSTANTS
///////////////////////////////////////////////////////////////////////////////
const {
  useState,
  useCallback,
  useEffect,
} = React;

const {
  flatten,
  uniq,
  capitalize,
  isString,
  sortBy,
  reverse,
  isNumber,
} = _; // lodash

// Constants
const AZ = 1;
const ZA = 2;

///////////////////////////////////////////////////////////////////////////////
// DATA GRID COMPONENTS
///////////////////////////////////////////////////////////////////////////////
// A single cell in a data grid
const Cell = ({
  datum,
}) => {
  return (
    <td>
      {
        isString(datum) && datum.toLowerCase().endsWith('.png') ?
          <img src={datum} />
          : isNumber(datum) ?
            datum.toLocaleString()
            :
            datum
      }
    </td>
  );
};

// A cell in a header row in a data grid
// passed indexes as a prop
const HeaderCell = ({
  title,
  onClick,
  index
}) => {
  return (
    <th style={index === 0 ? {backgroundColor: 'yellow'} : {backgroundColor: 'transparent'}} onClick={onClick}>
      {capitalize(title)}
    </th>
  );
};



///////////////////////////////////////////////////////////////////////////////
// DATAGRID COMPONENT WITH INSTANTIATION
///////////////////////////////////////////////////////////////////////////////
const DataGrid = () => {
  const [pinnedColumnValues, setPinnedColumnValues] = useState([]);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([])
  const [sortType, setSortType] = useState('random')
  const [pinnedTitles, setPinnedTitles] = useState([])

  console.log('state pinnedTitles', pinnedTitles)
  console.log('pinnedColumns', pinnedColumnValues)

  useEffect(() => {
    axios.get('https://assets.codepen.io/5781725/states-data.json')
      .then((results) => {
        // To have mock data show up randomly
        const randomizeStates = results.data.sort(() => .5 - Math.random());
        setOriginalData(randomizeStates)
        setData(randomizeStates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Preprocess the data to get a list of columns and add a helper index
  var columns = uniq(flatten(
    data.map((row) => Object.keys(row).filter((key) => !key.startsWith('_')))
  ));

  const onClick = (event) => {

    if (event.metaKey) { // pinning
      // grab inner text of element
      var col = event.target.innerText.toLowerCase()
      var container = []
      // look through data
      for (var x = 0; x < data.length; x++) {
        // check individual objects
        for (var key in data[x]) {
          if (key === col) {
            // store the key that matches event target
            container.push(data[x][key])
          }
        }
      }
      // keep track of values in column
      setPinnedColumnValues(container)
      // keep track of order of columns
      setPinnedTitles([col, ...pinnedTitles])
    }
      if (sortType === 'random' && !event.metaKey) {
        let sortedData = [...data].sort((a, b) => a.state.localeCompare(b.state));
        setData(sortedData);
        setSortType('ascending');
      }
      if (sortType === 'ascending' && !event.metaKey) {
        let sortedData = [...data].sort((a, b) => a.state.localeCompare(b.state)).reverse()
        setData(sortedData);
        setSortType('descending');
      }
      if (sortType === 'descending' && !event.metaKey) {
        setData(originalData);
        setSortType('random');
      }
  };


  if (pinnedColumnValues.length > 0) {
    // add pinned titles to front of columns
    columns = [...pinnedTitles, ...columns]
    // get rid of duplicates in columns from back
    columns = [...new Set(columns)]
    for (var z = 0; z < columns.length; z++) {
      for (var a = 0; a < pinnedTitles.length; a++) {
        // pinned column is first in line
        if (columns[z] === pinnedTitles[0]) {
          // keep track of item
          var match = columns[z]
          // delete old item
          columns.splice(z, 1)
          // reinsert into the front
          columns = [match, ...columns]
       }
      }
    }

    return (
      <table>
      <thead>
        <tr>
          {
            columns.map((col, i) => (
              <HeaderCell index={i}
                key={i}
                title={col}
                onClick={onClick}
              />

            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, i) => (
            <tr key={i}>
              {
                columns.map((col, j) => <Cell onClick={onClick} key={j} datum={row[col]} />)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
    )
   }


  return (
    <table>
      <thead>
        <tr>
          {
            columns.map((col, i) => (
              <HeaderCell
                key={i}
                title={col}
                onClick={onClick}
              />
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, i) => (
            <tr key={i}>
              {
                columns.map((col, j) => <Cell onClick={onClick} key={j} datum={row[col]} />)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

// Instantiate
ReactDOM.render(
  <React.StrictMode>
    <DataGrid />
  </React.StrictMode>,
  document.getElementById('root')
);
