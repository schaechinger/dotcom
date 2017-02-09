import ImageContent from './Image';
import MapContent from './Map';
import TextContent from './Text';
import './content.css';

class Content {
  createComponent(element, index, post) {
    let props = {
      uid: post.get('uid'),
      full: !!element.full
    };
    let content = null;

    switch (element.type) {
      case 'text':
        props.text = element.text;
        content = <TextContent {...props} />;
        break;

      case 'image':
      case 'image-full':
        props.image = element.image;
        props.text = element.text;
        props.full = !!element.full || ('image-full' === element.type);
        content = <ImageContent {...props} />;
        break;

      case 'map':
        props.locations = element.locations;
        props.marker = !!element.marker;
        props.line = !!element.line;
        content = <MapContent {...props} />;
        break;

      default:
        break;
    }

    return (
      <div
        className={`element-block content-${element.type}`}
        key={`${post.get('uid')}-${index}`}
      >
        {content}
      </div>
    );
  }
}

export default new Content();
