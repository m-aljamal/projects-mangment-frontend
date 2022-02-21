import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Note,
  Font,
} from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import { useFindEmployeesSalaries } from "src/utils/employees";
import PdfHeader from "./Header";
import PdfPage from "./PdfPage";
Font.register({ family: "Arabic", src: require("src/utils/tajawal.ttf") });
Font.register({ family: "Roboto", src: require("src/utils/Roboto.ttf") });

const mainStyles = StyleSheet.create({
  enFont: {
    fontFamily: "Roboto",
  },
  arFont: {
    fontFamily: "Arabic",
  },

  view: {
    height: "50px",
    width: "800px",
  },
  title: {
    margin: "10px auto",
  },
  center: {
    margin: "10px auto",
  },
  section: {
    flexDirection: "column",
    display: "flex",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});
const Index = () => {
  const { projectId } = useParams();
  const { employees, status, isLoading } = useFindEmployeesSalaries(
    projectId as string
  );

  if (isLoading) return <div>Loading...</div>;
  const pdf = (
    <Document title="this is title">
      <PdfPage>
        {/* <PdfTitle />
        <TableHeader />
        <JobTitle />
        <EmployeesTable /> */}
      </PdfPage>
    </Document>
  );
  return (
    <>
      <PDFViewer style={mainStyles.viewer}>{pdf}</PDFViewer>
      <PDFDownloadLink
        document={pdf}
        fileName={"Quote" + new Date().getTime() + ".pdf"}
      >
        {({ blob, url, loading, error }: any) =>
          loading ? "Loading . . ." : "Download"
        }
      </PDFDownloadLink>
    </>
  );
};

export default Index;
