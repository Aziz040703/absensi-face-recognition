const SPREADSHEET_ID = "1t6tn5kkLMsTrXINBcH7YFFAqBxe8yRvcCNyGbqMOUbk";

const SHEET = {
  LOGIN: "LOGIN",
  GURU: "GURU",
  KARYAWAN: "KARYAWAN",
  FACE_DATA: "FACE_DATA",
  ABSENSI: "ABSENSI",
  SETTING: "SETTING"
};

function getSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getSheet(name) {
  const sheet = getSpreadsheet().getSheetByName(name);

  if (!sheet) {
    throw new Error("Sheet tidak ditemukan: " + name);
  }

  return sheet;
}

function success(message, data = null) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: message,
      data: data
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function failed(message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: false,
      message: message,
      data: null
    }))
    .setMimeType(ContentService.MimeType.JSON);
}