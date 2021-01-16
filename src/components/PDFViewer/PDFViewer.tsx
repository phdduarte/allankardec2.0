import React from 'react';

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.viewerRef = React.createRef()
    this.backend = new props.backend()
  }

  componentDidMount() {
    const { src } = this.props;
    const element = this.viewerRef.current;

    this.backend.init(src, element);
  }
  

  render() {
    return (
      <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '800px' }}>

      </div>
    )
  }
}