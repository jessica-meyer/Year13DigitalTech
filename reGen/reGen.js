function generateResourceLink() {
  var x = "https://www.nzqa.govt.nz/nqfdocs/ncea-resource/";
  var y = "/";
  var z = "-";
  var eORa = "";

  var answerOrExam = document.getElementById("answerOrExam").value;
  var year = document.getElementById("year").value;
  var theNumber = document.getElementById("theNumber").value;

  if (answerOrExam === "exam") {
    answerOrExam = "exams";
    eORa = "exm";
  } else if (answerOrExam === "answer") {
    answerOrExam = "schedules";
    eORa = "ass";
  } else if (answerOrExam === "formula") {
    answerOrExam = "exams";
    eORa = "res";
  }

  var result =
    x + answerOrExam + y + year + y + theNumber + z + eORa + z + year + ".pdf";
  window.open(result, "_blank");
}
