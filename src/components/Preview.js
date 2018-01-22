import React from 'react';

export class Preview extends React.Component {

  showPreview() {
    document.querySelector('#application-preview').classList.toggle('hidden')
  }

  render() {
    return (
      <div>
        <button id='preview-toggle' onClick={this.showPreview}>Preview</button>
        <section id="application-preview" className="hidden"></section>
      </div>
      )
  }
}
