//scripts.js

function openWindows() {
      // URLs for the two new windows
      var url1 = 'https://cklab-edges.ck-collab-engtest.com/webapp3/?name=Patient%20#1&conference=genbreakoutrooms&role=guest';
      var url2 = 'https://cklab-edges.ck-collab-engtest.com/webapp3/?name=Patient%20#2&conference=genbreakoutrooms&role=guest';

      // Open the first window
      var window1 = window.open(url1, '_blank');
      
      // Open the second window after a short delay
      setTimeout(function () {
        var window2 = window.open(url2, '_blank');
      }, 1000); // Adjust the delay as needed
    }
