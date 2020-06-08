import React from 'react';
import { Provider } from 'react-redux';
import generatedStore from './src/state/createStore';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = generatedStore;
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        {element}
      </DndProvider>
    </Provider>
    )
}