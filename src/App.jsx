import React, { useEffect } from 'react';
import TodoView from './TodoView';
import TodoStore from './TodoStore';
const App = () => <TodoView todo={TodoStore} />;

export default App;
