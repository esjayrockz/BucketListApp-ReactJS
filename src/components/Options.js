import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Items</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
          disabled={props.options.length<1}
        >
          Clear list
        </button>
      </div>
      {props.options.length === 0 && <p className="widget__message">Please add an item to get started!</p>}
      {
        props.options.map((option, index)=>(
          <Option
            key={option}
            count={index+1}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );

export default Options;
