import getStylingPanelDefinition from './styling-definitions/styling-panel-definition';

const getAppearance = (translator, flags, theme) => (
  {
    simpleStyling: getStylingPanelDefinition(translator, theme),
  }
);

const getSettings = ({ translator, flags, anything }) => {
  
  const theme = anything?.sense?.theme;
  const settings = {
    uses: 'settings',
    items: {
      general: {
        items: {
             details: {
                 show: false,
             },
         },
      },
      presentation: {
        type: 'items',
        translation: 'properties.presentation',
        grouped: true,
        items: getAppearance(translator, flags, theme),
      },
    },
  };
  return settings;
};

export default function ({ translator, flags, anything }) {
  return {
      type: 'items',
      component: 'accordion',
      items: {
        data: {
          uses: 'data',
        },
        appearance: getSettings({ translator, flags, anything }),
      },
  };
}
