import React from 'react';
import './newStage.css';

// should this whole thing be a modal that hovers over the "MyStages" component?

const newStage = () => {
  return (
    <div className="new-stage-container">
      <h1>New Stage</h1>
      <h2>Stage name (click to edit)</h2>
      <form>
        <div className="equip-selection new-stage-form-section">
          <h3>Which Equip to include in this package?</h3>
          <tr>
            <td>XLR Cable</td>
            <td>5</td>
            <button> + </button>
            <button> - </button>
            <span>2</span>
          </tr>
          <tr>
            <td>Other Cable</td>
            <td>3</td>

            <button> + </button>
            <button> - </button>
            <span>2</span>
          </tr>
          <tr>
            <tdh>Mic Stand</tdh>
            <td>2</td>

            <button> + </button>
            <button> - </button>
            <span>2</span>
          </tr>
        </div>
        <div className="stage-dimensions new-stage-form-section">
          <h3>What are the stage dimensions?</h3>
          <label for="stage-width">Width</label>
          <input id="stage-width" type="number"></input>
          <br></br>
          <label for="stage-depth">Depth</label>
          <input id="stage-depth" type="number"></input>
        </div>
        <div className="indoor-or-outdoor new-stage-form-section">
          <h3>Indoor or Outdoor?</h3>
          <select name="indoor-or-outdoor" id="indoor-or-outdoor">
            <option value="indoor">Indoor</option>
            <option value="outdoor-uncovered">Outdoor Uncovered</option>
            <option value="outdoor-covered">Outdoor Covered</option>
          </select>
          <textarea placeholder="comments" rows="5" cols="35" />
        </div>
        <div className="additional-comments new-stage-form-selection">
          <h3>Anything else?</h3>
          <textarea rows="5" cols="35" placeholder="placeholder" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default newStage;
