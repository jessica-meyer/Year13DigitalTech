function enterFic() {
  const link = document.getElementById('ficLink').value;
  const title = document.getElementById('ficName').value;
  const author = document.getElementById('ficAuthor').value;
  const words = parseInt(document.getElementById('ficWords').value);
  const rating = parseInt(document.getElementById('ficRating').value);

  ficRating = rating;
  ficLink = link;
  ficTitle = title;
  ficWords = words;
  ficAuthor = author;

  if (ficLink === '' || ficTitle === '' || ficWords === '') {
    alert("Please fill in all fields!");
  }
  else if (ficRating >= 11) {
    alert("Rating is too high");
  }
  else {
    fb_writeFic(FICSREAD + '/' + userDetails.uid, ficTitle, ficInfo, fbR_procWriteFic);
    document.getElementById('ficLink').value='';
    document.getElementById('ficName').value='';
    document.getElementById('ficWords').value='';
    document.getElementById('ficAuthor').value='';
    document.getElementById('ficRating').value='';
    }

  fb_readRec(WORDSREAD, userDetails.uid, wordsRead, fbR_procReadWords);
}
