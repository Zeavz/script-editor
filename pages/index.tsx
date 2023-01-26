import PdfViewer from "../components/pdfViewer";
import { ScriptEditorHeader } from "../components/ScriptEditorHeader";
import { ScriptEditorFooter } from "../components/ScriptEditorFooter";
import { FileDropBox } from "../components/FileDropBox";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
}));

export default function Home() {
  const {classes} = useStyles();

  return (
    <>
      <title>Script Editor</title>
      <ScriptEditorHeader />
      <div className={classes.container}>
        <FileDropBox />
      </div>
      <ScriptEditorFooter />
    </>
  );
}
