import React from 'react';
import Item from './item';

function ItemList(props) {
  const renderList = () => {
    return props.data.map((obj) => {
      return <Item data={obj} key={obj.name} />;
    });
  };

  return (
    <div className="items">
      {renderList()}
    </div>
  );
}

export default ItemList;
