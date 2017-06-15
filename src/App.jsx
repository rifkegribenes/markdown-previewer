import React, { Component } from 'react';
import marked from 'marked';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: 'The Main Heading\n=======\n\nAnd Now A Sub-heading\n-----------\n \n### And a smaller heading\n \nParagraphs are separated\nby a blank line.\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~.\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears'
    };
  }

  getMarkdown() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
  });

  let rawMarkdown = marked(this.state.content, {sanitize: true})
  console.log(rawMarkdown);
  return {
    __html: rawMarkdown
  }
}

handleChange(e) {
  this.setState({
    content: e.target.value
  });
}


  render() {
    return (
      <main className="md">
        <div className="md__container">
          <h2 className="md__header">Input</h2>
          <textarea className="md__input" value={this.state.content} onChange={e => this.handleChange(e)}>
          </textarea>
        </div>
        <div className="md__container">
          <h2 className="md__header">Preview</h2>
          <div className="md__display" dangerouslySetInnerHTML={this.getMarkdown()}>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
