import React from 'react';
import { Tab } from '../../types/Tab';

type TabsContextType = {
  tabs: Tab[];
};

export const TabsContext = React.createContext<TabsContextType>({
  tabs: [],
});
