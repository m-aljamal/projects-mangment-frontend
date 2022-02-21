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
        <TableHeader />
        <JobTitle />
        <EmployeesTable />
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
  const titleStyles = StyleSheet.create({
    title: {
      fontSize: "13px",
      margin: "10px auto",
    },
    no: {
      fontSize: "10px",
      marginLeft: "15px",
    },
  });

  return (
    <View>
      <View style={titleStyles.title}>
        <Text style={mainStyles.enFont}>
          İmam şafi yetimler bakım okulu öğrencilerini otobüslerin ücretleri
        </Text>
      </View>
      <View style={titleStyles.no}>
        <Text>No:</Text>
        <Text style={{ marginTop: "5px" }}>Tarih:</Text>
      </View>
    </View>
  );
};

const PdfHeader = () => {
  const headerStyle = StyleSheet.create({
    name: {
      margin: "15px auto 5px auto",
      color: "#3B3B3B",
      fontSize: "17px",
      fontWeight: "bold",
    },
    number: {
      margin: "0px auto",
      fontSize: "10px",
      color: "#3B3B3B",
    },
    border: {
      width: "30%",
      margin: "8px auto",
      backgroundColor: "#2B547E",
      height: "4px",
      borderRadius: "10px",
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

const TableHeader = () => {
  const padding = "5px";
  const headerStyle = StyleSheet.create({
    container: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "13px",
      textAlign: "center",
      marginLeft: "15px",
      marginRight: "15px",
      fontFamily: "Roboto",
      backgroundColor: "#2B547E",
      color: "white",
      alignContent: "center",
    },
    nameAr: {
      fontFamily: "Arabic",
      width: "22%",
      borderRightWidth: "1px",
      borderRightColor: "white",
      padding,
    },
    sign: {
      width: "20%",
    },

    sharedStayle: {
      width: "20%",
      borderRightWidth: "1px",
      borderRightColor: "white",
      padding,
    },
    salary: {
      width: "12%",
      borderRightWidth: "1px",
      borderRightColor: "white",
      padding,
    },
    job: {
      width: "20%",
      borderRightWidth: "1px",
      borderRightColor: "white",
      padding,
    },
    nameEng: {
      width: "28%",
      borderRightWidth: "1px",
      borderRightColor: "white",
      padding,
    },
  });
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.nameEng}>Adı Soyadı</Text>
      <Text style={headerStyle.nameAr}>اﻹسم واللقب</Text>
      <Text style={headerStyle.job}>Görev</Text>
      <Text style={headerStyle.salary}>Maaş</Text>
      <Text style={headerStyle.sign}>Imza</Text>
    </View>
  );
};

const JobTitle = () => {
  const style = StyleSheet.create({
    container: {
      fontSize: "13px",
      textAlign: "center",
      padding: "8px",
      border: "1px solid black",
      marginRight: "15px",
      marginLeft: "15px",
    },
  });
  return (
    <View style={style.container}>
      <Text>Yöneticiler</Text>
    </View>
  );
};

const EmployeesTable = () => {
  const padding = "8px";
  const headerStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "10px",
      textAlign: "center",
      marginLeft: "15px",
      marginRight: "15px",
      fontFamily: "Roboto",
      backgroundColor: "white",
      color: "black",
      alignContent: "center",
    },
    nameAr: {
      fontFamily: "Arabic",
      width: "22%",
      borderRightWidth: "1px",
      borderRightColor: "black",
      borderBottomWidth: "1px",
      padding,
    },
    sign: {
      width: "20%",
      padding,
      borderBottomWidth: "1px",
      color: "white",
      borderRightWidth: "1px",
    },

    sharedStayle: {
      width: "20%",
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
      borderRightColor: "black",
      padding,
    },
    name: {
      width: "28%",
      borderRightWidth: "1px",
      borderLeftWidth: "1px",
      borderBottomWidth: "1px",
      borderRightColor: "black",
      padding,
    },
    salary: {
      width: "12%",
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
      padding,
    },
  });
  return (
    <>
      <View style={headerStyle.container}>
        <Text style={headerStyle.name}>Mohammad aljamal</Text>
        <Text style={headerStyle.nameAr}>محمد الجمل</Text>
        <Text style={headerStyle.sharedStayle}>Programmer</Text>
        <Text style={headerStyle.salary}>1500</Text>
        <Text style={headerStyle.sign}>f</Text>
      </View>
    </>
  );
};
