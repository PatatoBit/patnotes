import "./App.scss";
import { Document, Page, pdfjs } from "react-pdf";

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <>
      <Document file="/file.pdf">
        <Page pageNumber={5} />
      </Document>
    </>
  );
}

export default App;
