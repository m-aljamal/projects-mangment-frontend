import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Note,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    height: "50px",
    width: "800px",
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

// Create Document Component
function BasicDocument({ employees }: any) {
  

  return (
    <Document title="this is title">
      <Page size="A4" style={styles.page}>
       <View>
           
       </View>
      </Page>
    </Document>
  );
}
export default BasicDocument;
