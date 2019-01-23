import { Component } from 'react'

class Chatlio extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.id = 'chatlio-script';
    script.src = '/static/chatlio.js';
    script.async = true;

    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const widget = document.getElementById('chatlio-widget')
    const scripts = document.getElementsByTagName('script');
    const links = document.getElementsByTagName('link');
    const elements = [
        ...scripts,
        ...links
    ];

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const asset = element.src || element.href;

      if (asset && asset.includes('chatlio')) {
        element.parentNode.removeChild(element);
      }
    }

    if (widget) {
      widget.parentNode.removeChild(widget)
    }

    delete window._chatlio;
  }

  render() {
    return null
  }
}

export default Chatlio
