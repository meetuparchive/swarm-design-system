// Unfortunately the original iframe-resizer implementation
// relies on the module being loaded only once. To prevent
// this from complicating things, we provide this wrapper
// which makes sure that it is loaded only once.

if (window && !window.docsIFrameResizer) {
  window.docsIFrameResizer = require('iframe-resizer').iframeResizer;
}

module.exports = window.docsIFrameResizer;
