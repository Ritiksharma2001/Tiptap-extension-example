import { Extension } from '@tiptap/core';

const HighlightWithEmoji = Extension.create({
  name: 'highlightWithEmoji',

  addOptions() {
    return {
      emoji: '⭐', // Default emoji
    };
  },

  addCommands() {
    return {
      highlightWithEmoji:
        (emoji) =>
        ({ chain }) => {
          return chain()
            .focus()
            .extendMarkRange('textStyle') // Highlight the range
            .setMark('textStyle', { backgroundColor: '#FFFF00' }) // Apply highlight
            .insertContent(`${emoji}`) // Add emoji
            .run();
        },
    };
  },
});

export default HighlightWithEmoji;
