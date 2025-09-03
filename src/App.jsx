import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function App() {
  const editorRef = useRef();

  const handleSave = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdown = editorInstance.getMarkdown();
    alert(markdown);
  };

  // 툴바 커스텀 설정
  const toolbarItems = [
    // 기본 툴바
    ["bold", "italic", "strike"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["code", "codeblock"],
    // 마지막에 커스텀 버튼
    [
      {
        name: "save",
        tooltip: "저장하기",
        className: "toastui-editor-toolbar-icons save",
        text: "💾 저장",
        // command: "saveCommand", 
         onClick: handleSave,
      },
    ],
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">TUI Web Editor + React</h1>
        <Editor
          ref={editorRef}
          initialValue="여기에 내용을 작성하세요 ✨"
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          useCommandShortcut={true}
          toolbarItems={toolbarItems}
          hooks={{
            addImageBlobHook: async () => {}, // 이미지 훅 예시 (필요없으면 삭제)
          }}
          // 커스텀 버튼 이벤트 등록
          events={{
            command: (editor, commandName) => {
              if (commandName === "saveCommand") {
                handleSave();
              }
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
