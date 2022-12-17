import {Editor} from "@tinymce/tinymce-react";

export default function Home() {
  const onEditorChange = (e: { [p: string]: any }) => {
    console.log(e?.target?.getContent());
  }

  console.log(process.env.TINY_URL)

  return (
    <>
    <title>Script Editor</title>
      <h1>Script Editor</h1>
      <Editor
          apiKey={process.env.TINY_URL}
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
          onChange={(e) => onEditorChange(e)}
      />
      </>
  )
}
