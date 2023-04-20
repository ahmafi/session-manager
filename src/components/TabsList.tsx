import { mapMap } from '@src/utility';
import React, { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const TabsList = ({ className }: Props): JSX.Element => {
  const [windowTabs, setWindowTabs] =
    useState<Map<string, browser.tabs.Tab[]>>();

  useEffect(() => {
    browser.tabs.query({}).then((value) => {
      const newMap = new Map();
      value.forEach((tab) => {
        newMap.set(tab.windowId, [
          ...(newMap.has(tab.windowId) ? newMap.get(tab.windowId) : []),
          tab,
        ]);
      });
      setWindowTabs(newMap);
    });
  }, []);

  return (
    <div>
      {mapMap(windowTabs, (windowId, tabs) => (
        <div key={windowId}>
          <div>window: {windowId}</div>
          <div>
            {tabs.map((tab) => (
              <div key={tab.id}>
                <div>{`${tab.id} ${tab.title}`}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabsList;
