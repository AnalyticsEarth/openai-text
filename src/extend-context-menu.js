import { onContextMenu } from '@nebula.js/stardust';

const copyCellValue = async (evt) => {
    let target = evt.target;
  
    const value = target?.innerText;
  
    try {
      value && (await navigator.clipboard.writeText(String(value)));
    } catch (error) {
      console.log(error);
    }
  };

export default function extendContextMenu() {
  onContextMenu?.((menu, event) => {
    event.target &&
      //event.target.closest('.sn-table-cell') &&
      menu.addItem({
        label: 'Copy text',
        icon: 'lui-icon lui-icon--copy',
        tid: 'copy-text-context-item',
        select: async () => {
          console.log(event);
          copyCellValue(event);
        },
      });
  });
}