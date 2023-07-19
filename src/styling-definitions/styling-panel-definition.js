import { fontResolver as createFontResolver } from 'qlik-chart-modules';
import ChartLabelsDefinition from './styling-utils';

const getStylingPanelDefinition = (translator, theme) => {
  const fontResolver = createFontResolver({
    theme,
    translator,
    config: {
      id: 'responseStyle',
      paths: ['oaiResponse'],
    },
  });

  return {
    component: 'styling-panel',
    chartTitle: 'OpenAI Question',
    translation: 'LayerStyleEditor.component.styling',
    subtitle: 'LayerStyleEditor.component.styling',
    ref: 'components',
    useGeneral: true,
    useBackground: true,
    items:
      {
        responseSection: {
          label: 'OpenAI Response',
          component: 'panel-section',
          items: {
            labelItems: {
              component: 'items',
              ref: 'components',
              key: 'responseStyle',
              items: ChartLabelsDefinition('oaiResponse', fontResolver, theme),
            },
          },
        },
      },
  };
};

export default getStylingPanelDefinition;
