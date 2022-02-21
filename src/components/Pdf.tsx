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
Font.register({ family: "Arabic", src: require("src/utils/tajawal.ttf") });
Font.register({ family: "Roboto", src: require("src/utils/Roboto.ttf") });
// Create styles
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

// Create Document Component
function BasicDocument() {
  const { projectId } = useParams();
  const { employees, status, isLoading } = useFindEmployeesSalaries(
    projectId as string
  );

  if (isLoading) return <div>Loading...</div>;

  const pdf = (
    <Document title="this is title">
      <Page size="A4">
        <PdfHeader />
        <PdfTitle />
        {/* <View style={styles.view}>
          <Text>Employee salaries</Text>
          {employees.map((employee: any) => (
            <Text key={employee.id}>{employee.name}</Text>
          ))}
        </View> */}
      </Page>
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
}
export default BasicDocument;

const PdfTitle = () => {
  return (
    <View>
      <Text style={mainStyles.enFont}>
        İmam şafi yetimler bakım okulu öğrencilerini otobüslerin ücretleri
      </Text>
    </View>
  );
};

const PdfHeader = () => {
  const headerStyle = StyleSheet.create({
    name: {
      margin: "15px auto 5px auto",
      color: "#3B3B3B",
      fontSize: "17px",
    },
    number: {
      margin: "0px auto",
      fontSize: "10px",
      color: "#3B3B3B",
      borderBottomColor: "black",
      borderBottomWidth: 4,
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      paddingBottom: "8px",
    },
    border: {
      borderBottom: "1px solid red",
      width: "30%",
      margin: "5px auto",
      height: "20px",
    },
  });

  return (
    <View style={mainStyles.enFont}>
      <Text style={headerStyle.name}>Eğitim Geliştirme Derneği</Text>
      <Text style={headerStyle.number}>79.003.023 - Kilis</Text>
      <View style={headerStyle.border}></View>
    </View>
  );
};
