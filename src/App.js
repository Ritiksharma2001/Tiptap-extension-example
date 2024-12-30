import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import HighlightWithEmoji from './extensions/HighlightWithEmoji';
import './App.css'; // Import the CSS file

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      HighlightWithEmoji,
    ],
    content: '<p>Hello World!</p>',
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <button
        className="editor-button"
        onClick={() => editor.commands.highlightWithEmoji('🌟')}
      >
        Highlight with Emoji
      </button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default App;
