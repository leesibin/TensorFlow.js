import * as tf from "@tensorflow/tfjs";

async function webcamLaunch() {
  const display = document.getElementById("display");
  const videoElement = document.createElement("video");

  //웹캠 이미지를 표시하기 위한 요소를 추가
  display.appendChild(videoElement);
  videoElement.width = 500;
  videoElement.height = 500;

  const webcamIteratir = await tf.data.webcom(videoElement);

  const img = await webcamIteratir.capture();
  img.print();
}
webcamLaunch();
