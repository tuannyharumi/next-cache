import React, { Component, StrictMode } from 'react'
import ReactDOMServer from 'react-dom/server';
import cache from 'server/cache'


const toCache = ComponentToWrap =>
  class ComponentCacher extends Component {
    UNSAFE_componentWillMount() {
      if(typeof window === 'undefined'){
        console.log(ComponentToWrap.name);
          cache.get(ComponentToWrap.name, async (err, cachedValue) => {
            if (!cachedValue) {
              const componentTocache = ReactDOMServer.renderToString(<ComponentToWrap {...this.props}/>)
              cache.set(ComponentToWrap.name,componentTocache,10)
            }
          });
        }
    }

    render() {
      if(typeof window === 'undefined'){
        const cachedComponent = cache.get(ComponentToWrap.name);
        cache.get(ComponentToWrap.name, async (err, cachedComponent) => {
          if (cachedComponent) {
            console.log('HIT');
            return <div dangerouslySetInnerHTML={{__html:cachedComponent}} />
          } else {
            console.log('MISS');
            return <ComponentToWrap {...this.props}/>
          }
        })
        }
      return <ComponentToWrap {...this.props}/>
    }
  }

export default toCache
