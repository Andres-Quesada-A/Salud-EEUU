import React, { useRef, useEffect } from "react";
import styles from "./Embed.module.css";

const { tableau } = window;

function Embed( {path}) {
  let viz = useRef(null);
  const ref = useRef(null);
  const url = path;

  const options = {
    device: "desktop",
    hideTabs: true,
  };

  // const initViz = () => {
  //   viz = new tableau.Viz(ref.current, url, options);
  // };

  useEffect(() => {
    const initViz = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      viz = new tableau.Viz(ref.current, url, options);
    };
    initViz();
  }, []);

  // Opens the Download to PDF dialog box
  function exportToPDF() {
    viz.showExportPDFDialog();
  }

  // Downloads the crosstab data in an Excel file
  function exportToExcel() {
    viz.exportCrossTabToExcel();
  }

  // Opens the Download Image dialog box
  function exportImage() {
    viz.showExportImageDialog();
  }

  function exportPowerPoint() {
    viz.showExportPowerPointDialog();
  }

  return (
    <div className={styles.container}>
      <div className={styles.graphics} ref={ref} />
      <div className={styles.download}>
        <div className={styles.download_options}>
          <button onClick={exportToPDF}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/179/179483.png"
              alt=""
            ></img>
            PDF
          </button>
          <button onClick={exportImage}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png"
              alt=""
            ></img>
            IMG
          </button>
          <button onClick={exportToExcel}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888850.png"
              alt=""
            ></img>
            EXCEL
          </button>
          <button onClick={exportPowerPoint}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888874.png"
              alt=""
            ></img>
            PPT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Embed;
