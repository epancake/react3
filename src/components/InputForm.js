import React from 'react';

export const InputForm = (props) => {
    let setMessage = props.setMessage

    return (
      <div>
        <form id="application-input" onSubmit={setMessage}>
          <label>Apply Here: </label>
          <textarea id="application-text" rows="8" cols="100" onKeyUp={props.updatePreview}></textarea>
          <input id="submit" type="submit" value="Submit" />
        </form>
        <p id="message">{props.message}</p>
      </div>
      )
}
