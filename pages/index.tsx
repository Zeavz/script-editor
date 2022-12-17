import { Inter } from "@next/font/google";
import { Editor } from "@tinymce/tinymce-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onEditorChange = (e: { [p: string]: any }) => {
    console.log(e?.target?.getContent());
  };

  console.log(process.env.TINY_URL);

  return (
    <>
      <title>Script Editor</title>
      <h1>Script Editor</h1>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: "link image code",
          toolbar:
            "undo redo | bold italic | alignleft aligncenter alignright | code",
        }}
        onChange={(e) => onEditorChange(e)}
      />
    </>
  );
}
