const fs = require("fs");
const PDFDocument = require("pdfkit");

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("output.pdf"));

const testCase = 1;
switch (testCase) {
        case 0:
                doc.font("Courier");
                doc.text("Normal text works fine!");
                break;
        case 1:
                // Subsetted Palatino Italic
                doc.font("test_font_1.woff");
                doc.text("Maps");
                break;
        case 2:
                // Subsetted Palatino Bold
                doc.font("test_font_2.woff");
                doc.text("ANT");
                break;
        case 3:
                // Subsetted Palatino Regular
                doc.font("test_font_3.woff");
                doc.text("delegate");
                break;
        case 4:
                // Subsetted Palatino Bold-Italic
                doc.font("test_font_4.woff");
                doc.text("Bane");
                break;
        case 5:
                // Subsetted Palatino Regular
                doc.font("test_font_1.woff");
                doc.text("Dine");
                break;
}

// This errors on all test cases except Case 0
doc.end();
