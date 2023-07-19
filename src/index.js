import {
  useElement, useLayout
} from '@nebula.js/stardust';
import properties from './qae/object-properties';
import data from './data';
import ext from './ext';
/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy) {
  return {
    qae: {
      properties: {
        initial: properties,
      },
      data,
    },
    ext: ext(galaxy),
    component() {
      const element = useElement();
      const layout = useLayout();

      if (layout.openaiquestion !== '') {
        // Get the layout font style
        const layoutcomp = layout.components?.filter((el) => el.key === 'responseStyle')[0];

        const obj = document.createElement('p');
        obj.style.fontFamily = layoutcomp?.oaiResponse.fontFamily ? layoutcomp.oaiResponse.fontFamily : 'inherit';
        obj.style.fontSize = layoutcomp?.oaiResponse.fontSize ? layoutcomp.oaiResponse.fontSize : 'inherit';
        //obj.style.lineHeight = layoutcomp?.oaiResponse.fontSize ? layoutcomp.oaiResponse.fontSize : 'inherit';
        obj.style.color = layoutcomp?.oaiResponse.color.color ? layoutcomp.oaiResponse.color.color : 'inherit';
        obj.innerHTML = layout.openaiquestion.replace(/(?:\r\n|\r|\n)/g, '<br>');

        element.replaceChildren(obj);
        element.style.overflowY = 'scroll';
      }
    },
  };
}
