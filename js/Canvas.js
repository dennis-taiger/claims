function viewDataPoint(dataPoint, pg) {	
	switch(pg) {
		  case '1':
			showDoc('1');
			break;
		  case '2':
			showDoc('2');
			break;
		  case '3':
			showDoc('3');
			break;
		  case '6':
			showDoc('6');
			break;	
		  case '13':
			showDoc('13');
			break;	
		  default:
			// code block
		}

  setTimeout(function () {
    var canvas = document.getElementById('theCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
	  switch(dataPoint) {
		  case 'cname':
			ctx.rect(80, 90, 600, 55);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'pname':
			ctx.rect(80, 570, 360, 40);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'inv_no':
			ctx.rect(1370, 670, 100, 40);
			//document.getElementById("detailsBox9").style.display = "none";
			//document.getElementById("detailsBox6").style.display = "block";
			break;
		  case 'date':
			ctx.rect(1370, 770, 150, 40);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'doctor':
			ctx.rect(370, 890, 380, 45);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'amount':
			ctx.rect(1540, 1420, 120, 40);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'policy':
			ctx.rect(185, 200, 100, 15);
			//document.getElementById("detailsBox9").style.display = "none";
			//document.getElementById("detailsBox6").style.display = "block";
			break;
		  case 'subscription':
			ctx.rect(185, 250, 260, 15);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'insuredAmt':
			ctx.rect(580, 523, 55, 10);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'list':
			ctx.rect(180, 1280, 400, 20);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
	      case 'k3':
			ctx.rect(125, 1490, 1100, 85);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'k4':
			ctx.rect(115, 820, 1100, 85);
			//document.getElementById("detailsBox9").style.display = "block";
			//document.getElementById("detailsBox6").style.display = "none";
			break;
		  case 'k5':
			ctx.rect(115, 1400, 1100, 85);
			//document.getElementById("detailsBox9").style.display = "none";
			//document.getElementById("detailsBox6").style.display = "block";
			break;
		  case 'k6':
			ctx.rect(115, 1480, 1100, 85);
			//document.getElementById("detailsBox9").style.display = "none";
			//document.getElementById("detailsBox6").style.display = "block";
			break;
		  default:
			// code block
		}
	
    ctx.fill();
    ctx.stroke();

  }, 200);

}

function showDoc(pgNo) {
  var canvas = document.getElementById('theCanvas');
  var ctx = canvas.getContext('2d');

  var img = new Image();

  img.onload = function () {
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    ctx.drawImage(img, 0, 0);
  }

  //img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/yellow-flower.jpg';
  
  
  switch(pgNo) {
		  case '1':
			img.src = 'samples/Medical_Invoice_2.jpg';
			break;
		  case '2':
			img.src = 'samples/OIP_Policy 3.jpg';
			break;
		  case '3':
			img.src = 'samples/dental clinic.jpg';
			break;
		  case '6':
			img.src = 'samples/Medical_Invoice_2.jpg';
			break;
		  case '13':
			img.src = 'samples/Medical_Invoice_2.jpg';
			break;
		  default:
			// code block
		}
  

}
